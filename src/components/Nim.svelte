<script>
  import { onMount } from "svelte";

  onMount(() => {
    new Demo({ a: 0.9, b: 0.7, c: -1, d: -1 });
  });

  let canvas;

  const K = process.browser && 256 * (devicePixelRatio > 1 ? 2 : 1);

  const delay = t => new Promise(r => setTimeout(() => r(), t));

  function renderFragmentShader(gl) {
    const shader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(
      shader,
      `
  void main() {
    gl_FragColor = vec4(0.0, 0.05, 0.01, 0.1);
  }
  `
    );
    gl.compileShader(shader);
    return shader;
  }

  function renderVertexShader(gl) {
    const shader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(
      shader,
      `
  uniform sampler2D u_image;
  uniform vec2 u_size;
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(texture2D(u_image, a_position / u_size).xy, 0.0, ${Math.PI});
    gl_PointSize = 1.;
  }
  `
    );
    gl.compileShader(shader);
    return shader;
  }

  function timestepVertexShader(gl) {
    const shader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(
      shader,
      `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
  `
    );
    gl.compileShader(shader);
    return shader;
  }

  function timestepFragmentShader(gl) {
    const shader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(
      shader,
      `
  precision mediump float;
  uniform sampler2D u_image;
  uniform vec2 u_size;
  uniform float u_a;
  uniform float u_b;
  uniform float u_c;
  uniform float u_d;
  uniform float u_time;
  void main() {
    vec2 v = texture2D(u_image, gl_FragCoord.xy / u_size).xy;

    gl_FragColor = vec4(
      sin(max(u_a, 0.1) * v.y * u_time) + u_c * cos(u_a * v.x),
      sin(max(u_b, 0.9) * v.x) + u_d * cos(u_b * v.y *u_time),
      0.0,
      0.0001
    ) * 1.5;
  }
  `
    );
    gl.compileShader(shader);
    return shader;
  }

  function renderProgram(gl) {
    const program = gl.createProgram();
    gl.attachShader(program, renderVertexShader(gl));
    gl.attachShader(program, renderFragmentShader(gl));
    gl.linkProgram(program);
    gl.useProgram(program);
    gl.uniform2f(gl.getUniformLocation(program, "u_size"), K, K);
    gl.useProgram(null);
    return program;
  }

  function timestepProgram(gl) {
    const program = gl.createProgram();
    gl.attachShader(program, timestepVertexShader(gl));
    gl.attachShader(program, timestepFragmentShader(gl));
    gl.linkProgram(program);
    gl.useProgram(program);
    const param_a = gl.getUniformLocation(program, "u_a");
    const param_b = gl.getUniformLocation(program, "u_b");
    const param_c = gl.getUniformLocation(program, "u_c");
    const param_d = gl.getUniformLocation(program, "u_d");
    const param_time = gl.getUniformLocation(program, "u_time");
    gl.useProgram(null);
    return {
      program,
      param_a,
      param_b,
      param_c,
      param_d,
      param_time
    };
  }

  class Demo {
    setT1(gl) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        K,
        K,
        0,
        gl.RGBA,
        gl.FLOAT,
        this.a1
      );
      gl.bindTexture(gl.TEXTURE_2D, null);

      return texture;
    }

    setT2(gl) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        K,
        K,
        0,
        gl.RGBA,
        gl.FLOAT,
        null
      );
      gl.bindTexture(gl.TEXTURE_2D, null);
      return texture;
    }

    draw(t) {
      if (this.stopped) return;

      this.gl.useProgram(this.timestepProgram);
      this.gl.uniform1f(this.param_a, this.a);
      this.gl.uniform1f(this.param_b, this.b);
      this.gl.uniform1f(this.param_c, this.c);
      this.gl.uniform1f(this.param_d, this.d);
      this.gl.uniform1f(this.param_time, t * 0.001);
      this.gl.useProgram(null);

      this.gl.enableVertexAttribArray(this.timestepPosition);
      this.gl.enableVertexAttribArray(this.renderPosition);
      for (let i = 0; i < 9; ++i) {
        this.gl.useProgram(this.timestepProgram);
        this.gl.viewport(0, 0, K, K);
        this.gl.disable(this.gl.BLEND);
        if (i & 1) {
          this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb1);
          this.gl.bindTexture(this.gl.TEXTURE_2D, this.t2);
        } else {
          this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb2);
          this.gl.bindTexture(this.gl.TEXTURE_2D, this.t1);
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.qb);
        this.gl.vertexAttribPointer(
          this.timestepPosition,
          2,
          this.gl.FLOAT,
          false,
          0,
          0
        );
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
        if (i < 7) continue;

        this.gl.useProgram(this.renderProgram);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.enable(this.gl.BLEND);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.ib);
        this.gl.vertexAttribPointer(
          this.renderPosition,
          2,
          this.gl.UNSIGNED_SHORT,
          false,
          0,
          0
        );
        this.gl.drawArrays(this.gl.POINTS, 0, K * K);
      }

      setTimeout(() => requestAnimationFrame(this.draw.bind(this)), 400);
    }

    setFb2(gl) {
      const framebuffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        this.t2,
        0
      );
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return framebuffer;
    }

    setFb1(gl) {
      const framebuffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        this.t1,
        0
      );
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return framebuffer;
    }

    setA1() {
      const array = new Float32Array(4 * K * K);
      for (let y = 0, i = 0; y < K; ++y) {
        for (let x = 0; x < K; ++x, i += 4) {
          array[i + 0] = Math.random();
          array[i + 1] = Math.random();
        }
      }
      return array;
    }

    setQb(gl) {
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW
      );
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      return buffer;
    }

    setIb(gl) {
      const array = new Uint16Array(2 * K * K);
      for (let i = -1, y = 0; y < K; ++y) {
        for (let x = 0; x < K; ++x) {
          array[++i] = x;
          array[++i] = y;
        }
      }
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      return buffer;
    }

    constructor(props) {
      if (!window) return;

      canvas.style.zIndex = -1;

      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      const gl = (canvas.value = canvas.getContext("webgl", {
        antialias: false,
        depth: false,
        preserveDrawingBuffer: true
      }));
      this.gl = gl;
      gl.getExtension("OES_texture_float");
      gl.blendFunc(gl.ONE, gl.ONE);

      this.update(props);

      requestAnimationFrame(this.draw.bind(this));
    }

    update(props) {
      this.a = props.a;
      this.b = props.b;
      this.c = props.c;
      this.d = props.d;

      this.a1 = this.setA1(this.gl);
      this.t1 = this.setT1(this.gl);
      this.t2 = this.setT2(this.gl);
      this.ib = this.setIb(this.gl);
      this.qb = this.setQb(this.gl);
      this.fb1 = this.setFb1(this.gl);
      this.fb2 = this.setFb2(this.gl);

      const {
        program,
        param_a,
        param_b,
        param_c,
        param_d,
        param_time
      } = timestepProgram(this.gl);

      this.param_a = param_a;
      this.param_b = param_b;
      this.param_c = param_c;
      this.param_d = param_d;
      this.param_time = param_time;

      this.timestepProgram = program;
      this.gl.useProgram(program);
      this.timestepPosition = this.gl.getAttribLocation(
        this.timestepProgram,
        "a_position"
      );
      this.gl.uniform2f(
        this.gl.getUniformLocation(this.timestepProgram, "u_size"),
        K,
        K
      );
      this.gl.useProgram(null);

      this.renderProgram = renderProgram(this.gl);
      this.renderPosition = this.gl.getAttribLocation(
        this.renderProgram,
        "a_position"
      );
    }
  }
</script>

<canvas bind:this={canvas} class="absolute w-full h-screen top-0 left-0" />
