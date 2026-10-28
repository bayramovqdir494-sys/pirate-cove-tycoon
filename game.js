(()=>{var Qe=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var $f=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Bn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[s&255]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Gt(s,e,t){return Math.max(e,Math.min(t,s))}function sh(s,e){return(s%e+e)%e}function Pp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ip(s,e,t){return s!==e?(t-s)/(e-s):0}function br(s,e,t){return(1-t)*s+t*e}function Lp(s,e,t,n){return br(s,e,1-Math.exp(-t*n))}function Dp(s,e=1){return e-Math.abs(sh(s,e*2)-e)}function Np(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Up(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Op(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kp(s,e){return s+Math.random()*(e-s)}function Fp(s){return s*(.5-Math.random())}function Bp(s){s!==void 0&&(xu=s);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zp(s){return s*_r}function Hp(s){return s*Bs}function Vp(s){return(s&s-1)===0&&s!==0}function Gp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}function Hd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qp(){let s=Ar("canvas");return s.style.display="block",s}function Pa(s){s in vu||(vu[s]=!0,console.warn(s))}function Yp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $p(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kp(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function Cs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Wo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?oc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function qo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Vi.fromArray(s,r);let o=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}function rl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function lm(s,e,t,n,i,r,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Yn,o),l===null)return null;ua.copy(o),ua.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:s}}function da(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,oa),s.getVertexPosition(l,la),s.getVertexPosition(c,ca);let u=lm(s,e,t,n,oa,la,ca,Lu);if(u){let h=new R;Ki.getBarycoord(Lu,oa,la,ca,h),i&&(u.uv=Ki.getInterpolatedAttribute(i,o,l,c,h,new re)),r&&(u.uv1=Ki.getInterpolatedAttribute(r,o,l,c,h,new re)),a&&(u.normal=Ki.getInterpolatedAttribute(a,o,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Ki.getNormal(oa,la,ca,d.normal),u.face=d,u.barycoord=h}return u}function zs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){let e={};for(let t=0;t<s.length;t++){let n=zs(s[t]);for(let i in n)e[i]=n[i]}return e}function cm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}function Wd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function pm(s){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}function K0(s,e,t,n,i,r,a){let o=new Z(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function x(w){let b=!1,y=g(w);y===null?p(o,l):y&&y.isColor&&(p(y,1),b=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,b){let y=g(b);y&&(y.isCubeTexture||y.mapping===co)?(u===void 0&&(u=new Ee(new ln(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:zs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Xi.copy(b.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(Xi)),u.material.toneMapped=ze.getTransfer(y.colorSpace)!==pt,(h!==y||d!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ee(new Hs(2,2),new yt({name:"BackgroundMaterial",uniforms:zs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ze.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,b){w.getRGB(pa,Gd(s)),n.buffers.color.setClear(pa.r,pa.g,pa.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:x,addToRenderList:m}}function Z0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(v,S,F,B,H){let J=!1,z=h(B,F,S);r!==z&&(r=z,c(r.object)),J=f(v,B,F,H),J&&g(v,B,F,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(v,S,F,B),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,S,F){let B=F.wireframe===!0,H=n[v.id];H===void 0&&(H={},n[v.id]=H);let J=H[S.id];J===void 0&&(J={},H[S.id]=J);let z=J[B];return z===void 0&&(z=d(l()),J[B]=z),z}function d(v){let S=[],F=[],B=[];for(let H=0;H<t;H++)S[H]=0,F[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:F,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,S,F,B){let H=r.attributes,J=S.attributes,z=0,ne=F.getAttributes();for(let G in ne)if(ne[G].location>=0){let fe=H[G],Me=J[G];if(Me===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function g(v,S,F,B){let H={},J=S.attributes,z=0,ne=F.getAttributes();for(let G in ne)if(ne[G].location>=0){let fe=J[G];fe===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));let Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),H[G]=Me,z++}r.attributes=H,r.attributesNum=z,r.index=B}function x(){let v=r.newAttributes;for(let S=0,F=v.length;S<F;S++)v[S]=0}function m(v){p(v,0)}function p(v,S){let F=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;F[v]=1,B[v]===0&&(s.enableVertexAttribArray(v),B[v]=1),H[v]!==S&&(s.vertexAttribDivisor(v,S),H[v]=S)}function w(){let v=r.newAttributes,S=r.enabledAttributes;for(let F=0,B=S.length;F<B;F++)S[F]!==v[F]&&(s.disableVertexAttribArray(F),S[F]=0)}function b(v,S,F,B,H,J,z){z===!0?s.vertexAttribIPointer(v,S,F,H,J):s.vertexAttribPointer(v,S,F,B,H,J)}function y(v,S,F,B){x();let H=B.attributes,J=F.getAttributes(),z=S.defaultAttributeValues;for(let ne in J){let G=J[ne];if(G.location>=0){let de=H[ne];if(de===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),de!==void 0){let fe=de.normalized,Me=de.itemSize,Je=e.get(de);if(Je===void 0)continue;let at=Je.buffer,X=Je.type,Q=Je.bytesPerElement,_e=X===s.INT||X===s.UNSIGNED_INT||de.gpuType===Zc;if(de.isInterleavedBufferAttribute){let pe=de.data,Ue=pe.stride,Re=de.offset;if(pe.isInstancedInterleavedBuffer){for(let qe=0;qe<G.locationSize;qe++)p(G.location+qe,pe.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let qe=0;qe<G.locationSize;qe++)m(G.location+qe);s.bindBuffer(s.ARRAY_BUFFER,at);for(let qe=0;qe<G.locationSize;qe++)b(G.location+qe,Me/G.locationSize,X,fe,Ue*Q,(Re+Me/G.locationSize*qe)*Q,_e)}else{if(de.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)p(G.location+pe,de.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<G.locationSize;pe++)m(G.location+pe);s.bindBuffer(s.ARRAY_BUFFER,at);for(let pe=0;pe<G.locationSize;pe++)b(G.location+pe,Me/G.locationSize,X,fe,Me*Q,Me/G.locationSize*pe*Q,_e)}}else if(z!==void 0){let fe=z[ne];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(G.location,fe);break;case 3:s.vertexAttrib3fv(G.location,fe);break;case 4:s.vertexAttrib4fv(G.location,fe);break;default:s.vertexAttrib1fv(G.location,fe)}}}}w()}function P(){N();for(let v in n){let S=n[v];for(let F in S){let B=S[F];for(let H in B)u(B[H].object),delete B[H];delete S[F]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let S=n[v.id];for(let F in S){let B=S[F];for(let H in B)u(B[H].object),delete B[H];delete S[F]}delete n[v.id]}function E(v){for(let S in n){let F=n[S];if(F[v.id]===void 0)continue;let B=F[v.id];for(let H in B)u(B[H].object),delete B[H];delete F[v.id]}}function N(){W(),a=!0,r!==i&&(r=i,c(r.object))}function W(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:W,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function J0(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function j0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==En&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let N=E===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==oi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fn&&!N)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function Q0(s){let e=this,t=null,n=0,i=!1,r=!1,a=new gn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,b=w*4,y=p.clippingState||null;l.value=y,y=u(g,d,b,f);for(let P=0;P!==b;++P)y[P]=t[P];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==x;++b,y+=4)a.copy(h[b]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ex(s){let e=new WeakMap;function t(a,o){return o===Ll?a.mapping=Ds:o===Dl&&(a.mapping=Ns),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ll||o===Dl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new uc(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function tx(s){let e=[],t=[],n=[],i=s,r=s-As+1+Uu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-As?l=Uu[a-s+As-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){let E=A%3*2/3-1,N=A>2?0:-1,W=[E,N,0,E+2/3,N,0,E+2/3,N+1,0,E,N,0,E+2/3,N+1,0,E,N+1,0];w.set(W,x*g*A),b.set(d,m*g*A);let v=[A,A,A,A,A,A];y.set(v,p*g*A)}let P=new Rt;P.setAttribute("position",new mt(w,x)),P.setAttribute("uv",new mt(b,m)),P.setAttribute("faceIndex",new mt(y,p)),e.push(P),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fu(s,e,t){let n=new Kt(s,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function nx(s,e,t){let n=new Float32Array(Zi),i=new R(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Bu(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function zu(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ix(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ll||l===Dl,u=l===Ds||l===Ns;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Vs(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Vs(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function sx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Pa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rx(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let b=0,y=w.length;b<y;b+=3){let P=w[b+0],A=w[b+1],E=w[b+2];d.push(P,A,A,E,E,P)}}else if(g!==void 0){let w=g.array;x=g.version;for(let b=0,y=w.length/3-1;b<y;b+=3){let P=b+0,A=b+1,E=b+2;d.push(P,A,A,E,E,P)}}else return;let m=new(Hd(d)?Fa:ka)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function ax(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w];for(let w=0;w<x.length;w++)t.update(p,n,x[w])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ox(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lx(s,e,t){let n=new WeakMap,i=new et;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let W=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",W)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*P*4*h),E=new Oa(A,y,P,h);E.type=Fn,E.needsUpdate=!0;let N=b*4;for(let v=0;v<h;v++){let S=m[v],F=p[v],B=w[v],H=y*P*4*v;for(let J=0;J<S.count;J++){let z=J*N;f===!0&&(i.fromBufferAttribute(S,J),A[H+z+0]=i.x,A[H+z+1]=i.y,A[H+z+2]=i.z,A[H+z+3]=0),g===!0&&(i.fromBufferAttribute(F,J),A[H+z+4]=i.x,A[H+z+5]=i.y,A[H+z+6]=i.z,A[H+z+7]=0),x===!0&&(i.fromBufferAttribute(B,J),A[H+z+8]=i.x,A[H+z+9]=i.y,A[H+z+10]=i.z,A[H+z+11]=B.itemSize===4?i.w:1)}}d={count:h,texture:E,size:new re(y,P)},n.set(o,d),o.addEventListener("dispose",W)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function cx(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function $s(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Vu[i];if(r===void 0&&(r=new Float32Array(i),Vu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fo(s,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),zt(t,e)}}function dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),zt(t,e)}}function fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),zt(t,e)}}function px(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;qu.set(n),s.uniformMatrix2fv(this.addr,!1,qu),zt(t,n)}}function mx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Xu.set(n),s.uniformMatrix3fv(this.addr,!1,Xu),zt(t,n)}}function gx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Wu.set(n),s.uniformMatrix4fv(this.addr,!1,Wu),zt(t,n)}}function xx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),zt(t,e)}}function yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),zt(t,e)}}function _x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),zt(t,e)}}function bx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Mx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),zt(t,e)}}function Sx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),zt(t,e)}}function wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),zt(t,e)}}function Tx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hu.compareFunction=zd,r=Hu):r=Xd,t.setTexture2D(e||r,i)}function Ex(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yd,i)}function Ax(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$d,i)}function Rx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qd,i)}function Cx(s){switch(s){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return vx;case 35668:case 35672:return yx;case 35669:case 35673:return _x;case 5125:return bx;case 36294:return Mx;case 36295:return Sx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(s,e){s.uniform1fv(this.addr,e)}function Ix(s,e){let t=$s(e,this.size,2);s.uniform2fv(this.addr,t)}function Lx(s,e){let t=$s(e,this.size,3);s.uniform3fv(this.addr,t)}function Dx(s,e){let t=$s(e,this.size,4);s.uniform4fv(this.addr,t)}function Nx(s,e){let t=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ux(s,e){let t=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ox(s,e){let t=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kx(s,e){s.uniform1iv(this.addr,e)}function Fx(s,e){s.uniform2iv(this.addr,e)}function Bx(s,e){s.uniform3iv(this.addr,e)}function zx(s,e){s.uniform4iv(this.addr,e)}function Hx(s,e){s.uniform1uiv(this.addr,e)}function Vx(s,e){s.uniform2uiv(this.addr,e)}function Gx(s,e){s.uniform3uiv(this.addr,e)}function Wx(s,e){s.uniform4uiv(this.addr,e)}function Xx(s,e,t){let n=this.cache,i=e.length,r=fo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Xd,r[a])}function qx(s,e,t){let n=this.cache,i=e.length,r=fo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yd,r[a])}function Yx(s,e,t){let n=this.cache,i=e.length,r=fo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||$d,r[a])}function $x(s,e,t){let n=this.cache,i=e.length,r=fo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qd,r[a])}function Kx(s){switch(s){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return Nx;case 35675:return Ux;case 35676:return Ox;case 5124:case 35670:return kx;case 35667:case 35671:return Fx;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return Hx;case 36294:return Vx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}function Yu(s,e){s.seq.push(e),s.map[e.id]=e}function Zx(s,e,t){let n=s.name,i=n.length;for(pl.lastIndex=0;;){let r=pl.exec(n),a=pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Yu(t,c===void 0?new dc(o,s,e):new fc(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new pc(o),Yu(t,h)),t=h}}}function $u(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function Qx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ev(s){let e=ze.getPrimaries(ze.workingColorSpace),t=ze.getPrimaries(s),n;switch(e===t?n="":e===Da&&t===La?n="LinearDisplayP3ToLinearSRGB":e===La&&t===Da&&(n="LinearSRGBToLinearDisplayP3"),s){case Nt:case uo:return[n,"LinearTransferOETF"];case St:case ih:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ku(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qx(s.getShaderSource(e),a)}else return i}function tv(s,e){let t=ev(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nv(s,e){let t;switch(e){case Wc:t="Linear";break;case Xc:t="Reinhard";break;case qc:t="Cineon";break;case Fr:t="ACESFilmic";break;case Yc:t="AgX";break;case $c:t="Neutral";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function iv(){ze.getLuminanceCoefficients(ga);let s=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function rv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function av(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function vr(s){return s!==""}function Zu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function mc(s){return s.replace(ov,cv)}function cv(s,e){let t=ke[e];if(t===void 0){let n=lv.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}function ju(s){return s.replace(hv,uv)}function uv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function fv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pv(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ns&&(e="ENVMAP_MODE_REFRACTION"),e}function mv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ad:e="ENVMAP_BLENDING_MULTIPLY";break;case mp:e="ENVMAP_BLENDING_MIX";break;case gp:e="ENVMAP_BLENDING_ADD";break}return e}function gv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=dv(t),c=fv(t),u=pv(t),h=mv(t),d=gv(t),f=sv(t),g=rv(r),x=i.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ke.tonemapping_pars_fragment:"",t.toneMapping!==wi?nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,tv("linearToOutputTexel",t.outputColorSpace),iv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=mc(a),a=Zu(a,t),a=Ju(a,t),o=mc(o),o=Zu(o,t),o=Ju(o,t),a=ju(a),o=ju(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=w+m+a,y=w+p+o,P=$u(i,i.VERTEX_SHADER,b),A=$u(i,i.FRAGMENT_SHADER,y);i.attachShader(x,P),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(S){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(x).trim(),B=i.getShaderInfoLog(P).trim(),H=i.getShaderInfoLog(A).trim(),J=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,A);else{let ne=Ku(i,P,"vertex"),G=Ku(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+F+`
`+ne+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||H==="")&&(z=!1);z&&(S.diagnostics={runnable:J,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(P),i.deleteShader(A),N=new Ps(i,x),W=av(i,x)}let N;this.getUniforms=function(){return N===void 0&&E(this),N};let W;this.getAttributes=function(){return W===void 0&&E(this),W};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,Jx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}function yv(s,e,t,n,i,r,a){let o=new Rr,l=new gc,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures,g=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,S,F,B,H){let J=B.fog,z=H.geometry,ne=v.isMeshStandardMaterial?B.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||ne),de=G&&G.mapping===co?G.image.height:null,fe=x[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let Me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=Me!==void 0?Me.length:0,at=0;z.morphAttributes.position!==void 0&&(at=1),z.morphAttributes.normal!==void 0&&(at=2),z.morphAttributes.color!==void 0&&(at=3);let X,Q,_e,pe;if(fe){let an=Gn[fe];X=an.vertexShader,Q=an.fragmentShader}else X=v.vertexShader,Q=v.fragmentShader,l.update(v),_e=l.getVertexShaderID(v),pe=l.getFragmentShaderID(v);let Ue=s.getRenderTarget(),Re=H.isInstancedMesh===!0,qe=H.isBatchedMesh===!0,ht=!!v.map,Ye=!!v.matcap,C=!!G,un=!!v.aoMap,We=!!v.lightMap,Ke=!!v.bumpMap,Pe=!!v.normalMap,_t=!!v.displacementMap,De=!!v.emissiveMap,T=!!v.metalnessMap,_=!!v.roughnessMap,U=v.anisotropy>0,Y=v.clearcoat>0,j=v.dispersion>0,q=v.iridescence>0,Se=v.sheen>0,ae=v.transmission>0,me=U&&!!v.anisotropyMap,Ze=Y&&!!v.clearcoatMap,te=Y&&!!v.clearcoatNormalMap,ge=Y&&!!v.clearcoatRoughnessMap,Ie=q&&!!v.iridescenceMap,Le=q&&!!v.iridescenceThicknessMap,xe=Se&&!!v.sheenColorMap,Xe=Se&&!!v.sheenRoughnessMap,Oe=!!v.specularMap,xt=!!v.specularColorMap,I=!!v.specularIntensityMap,he=ae&&!!v.transmissionMap,V=ae&&!!v.thicknessMap,K=!!v.gradientMap,le=!!v.alphaMap,ue=v.alphaTest>0,$e=!!v.alphaHash,Lt=!!v.extensions,rn=wi;v.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(rn=s.toneMapping);let je={shaderID:fe,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Q,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:qe,batchingColor:qe&&H._colorsTexture!==null,instancing:Re,instancingColor:Re&&H.instanceColor!==null,instancingMorph:Re&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Nt,alphaToCoverage:!!v.alphaToCoverage,map:ht,matcap:Ye,envMap:C,envMapMode:C&&G.mapping,envMapCubeUVHeight:de,aoMap:un,lightMap:We,bumpMap:Ke,normalMap:Pe,displacementMap:f&&_t,emissiveMap:De,normalMapObjectSpace:Pe&&v.normalMapType===Mp,normalMapTangentSpace:Pe&&v.normalMapType===Bd,metalnessMap:T,roughnessMap:_,anisotropy:U,anisotropyMap:me,clearcoat:Y,clearcoatMap:Ze,clearcoatNormalMap:te,clearcoatRoughnessMap:ge,dispersion:j,iridescence:q,iridescenceMap:Ie,iridescenceThicknessMap:Le,sheen:Se,sheenColorMap:xe,sheenRoughnessMap:Xe,specularMap:Oe,specularColorMap:xt,specularIntensityMap:I,transmission:ae,transmissionMap:he,thicknessMap:V,gradientMap:K,opaque:v.transparent===!1&&v.blending===Si&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:$e,combine:v.combine,mapUv:ht&&m(v.map.channel),aoMapUv:un&&m(v.aoMap.channel),lightMapUv:We&&m(v.lightMap.channel),bumpMapUv:Ke&&m(v.bumpMap.channel),normalMapUv:Pe&&m(v.normalMap.channel),displacementMapUv:_t&&m(v.displacementMap.channel),emissiveMapUv:De&&m(v.emissiveMap.channel),metalnessMapUv:T&&m(v.metalnessMap.channel),roughnessMapUv:_&&m(v.roughnessMap.channel),anisotropyMapUv:me&&m(v.anisotropyMap.channel),clearcoatMapUv:Ze&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(v.sheenRoughnessMap.channel),specularMapUv:Oe&&m(v.specularMap.channel),specularColorMapUv:xt&&m(v.specularColorMap.channel),specularIntensityMapUv:I&&m(v.specularIntensityMap.channel),transmissionMapUv:he&&m(v.transmissionMap.channel),thicknessMapUv:V&&m(v.thicknessMap.channel),alphaMapUv:le&&m(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Pe||U),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(ht||le),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Je,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:rn,decodeVideoTexture:ht&&v.map.isVideoTexture===!0&&ze.getTransfer(v.map.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Lt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&v.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function w(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)S.push(F),S.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(b(S,v),y(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function b(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function P(v){let S=x[v.type],F;if(S){let B=Gn[S];F=Li.clone(B.uniforms)}else F=v.uniforms;return F}function A(v,S){let F;for(let B=0,H=u.length;B<H;B++){let J=u[B];if(J.cacheKey===S){F=J,++F.usedTimes;break}}return F===void 0&&(F=new xv(s,S,v,r),u.push(F)),F}function E(v){if(--v.usedTimes===0){let S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function N(v){l.remove(v)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:w,getUniforms:P,acquireProgram:A,releaseProgram:E,releaseShaderCache:N,programs:u,dispose:W}}function _v(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function bv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ed(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function td(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||bv),n.length>1&&n.sort(d||ed),i.length>1&&i.sort(d||ed)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Mv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new td,s.set(n,[a])):i>=r.length?(a=new td,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Sv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Z};break;case"SpotLight":t={position:new R,direction:new R,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Z,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":t={color:new Z,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function wv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function Ev(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Av(s){let e=new Sv,t=wv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new Ne,a=new Ne;function o(c){let u=0,h=0,d=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,b=0,y=0,P=0,A=0,E=0;c.sort(Ev);for(let W=0,v=c.length;W<v;W++){let S=c[W],F=S.color,B=S.intensity,H=S.distance,J=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=F.r*B,h+=F.g*B,d+=F.b*B;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],B);E++}else if(S.isDirectionalLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let ne=S.shadow,G=t.get(S);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=S.shadow.matrix,w++}n.directional[f]=z,f++}else if(S.isSpotLight){let z=e.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(F).multiplyScalar(B),z.distance=H,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[x]=z;let ne=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,ne.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[x]=ne.matrix,S.castShadow){let G=t.get(S);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=J,y++}x++}else if(S.isRectAreaLight){let z=e.get(S);z.color.copy(F).multiplyScalar(B),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=z,m++}else if(S.isPointLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let ne=S.shadow,G=t.get(S);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=S.shadow.matrix,b++}n.point[g]=z,g++}else if(S.isHemisphereLight){let z=e.get(S);z.skyColor.copy(S.color).multiplyScalar(B),z.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==y||N.numSpotMaps!==P||N.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,N.directionalLength=f,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=y,N.numSpotMaps=P,N.numLightProbes=E,n.version=Tv++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let b=c[p];if(b.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(b.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function nd(s){let e=new Av(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new nd(s),e.set(i,[o])):r>=a.length?(o=new nd(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Iv(s,e,t){let n=new Cr,i=new re,r=new re,a=new et,o=new vc({depthPacking:bp}),l=new yc,c={},u=t.maxTextureSize,h={[Yn]:Qt,[Qt]:Yn,[on]:on},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Cv,fragmentShader:Pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let p=this.type;this.render=function(A,E,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let W=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),F=s.state;F.setBlending(qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==ri&&this.type===ri,H=p===ri&&this.type!==ri;for(let J=0,z=A.length;J<z;J++){let ne=A[J],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let de=G.getFrameExtents();if(i.multiply(de),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/de.x),i.x=r.x*de.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/de.y),i.y=r.y*de.y,G.mapSize.y=r.y)),G.map===null||B===!0||H===!0){let Me=this.type!==ri?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new Kt(i.x,i.y,Me),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let fe=G.getViewportCount();for(let Me=0;Me<fe;Me++){let Je=G.getViewport(Me);a.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),F.viewport(a),G.updateMatrices(ne,Me),n=G.getFrustum(),y(E,N,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===ri&&w(G,N),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(W,v,S)};function w(A,E){let N=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kt(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,N,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,N,f,x,null)}function b(A,E,N,W){let v=null,S=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)v=S;else if(v=N.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let F=v.uuid,B=E.uuid,H=c[F];H===void 0&&(H={},c[F]=H);let J=H[B];J===void 0&&(J=v.clone(),H[B]=J,E.addEventListener("dispose",P)),v=J}if(v.visible=E.visible,v.wireframe=E.wireframe,W===ri?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=s.properties.get(v);F.light=N}return v}function y(A,E,N,W,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let B=e.update(A),H=A.material;if(Array.isArray(H)){let J=B.groups;for(let z=0,ne=J.length;z<ne;z++){let G=J[z],de=H[G.materialIndex];if(de&&de.visible){let fe=b(A,de,W,v);A.onBeforeShadow(s,A,E,N,B,fe,G),s.renderBufferDirect(N,null,B,fe,A,G),A.onAfterShadow(s,A,E,N,B,fe,G)}}}else if(H.visible){let J=b(A,H,W,v);A.onBeforeShadow(s,A,E,N,B,J,null),s.renderBufferDirect(N,null,B,J,A,null),A.onAfterShadow(s,A,E,N,B,J,null)}}let F=A.children;for(let B=0,H=F.length;B<H;B++)y(F[B],E,N,W,v)}function P(A){A.target.removeEventListener("dispose",P);for(let N in c){let W=c[N],v=A.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}function Dv(s){function e(){let I=!1,he=new et,V=null,K=new et(0,0,0,0);return{setMask:function(le){V!==le&&!I&&(s.colorMask(le,le,le,le),V=le)},setLocked:function(le){I=le},setClear:function(le,ue,$e,Lt,rn){rn===!0&&(le*=Lt,ue*=Lt,$e*=Lt),he.set(le,ue,$e,Lt),K.equals(he)===!1&&(s.clearColor(le,ue,$e,Lt),K.copy(he))},reset:function(){I=!1,V=null,K.set(-1,0,0,0)}}}function t(){let I=!1,he=!1,V=null,K=null,le=null;return{setReversed:function(ue){he=ue},setTest:function(ue){ue?_e(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(ue){V!==ue&&!I&&(s.depthMask(ue),V=ue)},setFunc:function(ue){if(he&&(ue=Lv[ue]),K!==ue){switch(ue){case Tl:s.depthFunc(s.NEVER);break;case El:s.depthFunc(s.ALWAYS);break;case Al:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case Rl:s.depthFunc(s.EQUAL);break;case Cl:s.depthFunc(s.GEQUAL);break;case Pl:s.depthFunc(s.GREATER);break;case Il:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ue}},setLocked:function(ue){I=ue},setClear:function(ue){le!==ue&&(s.clearDepth(ue),le=ue)},reset:function(){I=!1,V=null,K=null,le=null}}}function n(){let I=!1,he=null,V=null,K=null,le=null,ue=null,$e=null,Lt=null,rn=null;return{setTest:function(je){I||(je?_e(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(je){he!==je&&!I&&(s.stencilMask(je),he=je)},setFunc:function(je,an,jn){(V!==je||K!==an||le!==jn)&&(s.stencilFunc(je,an,jn),V=je,K=an,le=jn)},setOp:function(je,an,jn){(ue!==je||$e!==an||Lt!==jn)&&(s.stencilOp(je,an,jn),ue=je,$e=an,Lt=jn)},setLocked:function(je){I=je},setClear:function(je){rn!==je&&(s.clearStencil(je),rn=je)},reset:function(){I=!1,he=null,V=null,K=null,le=null,ue=null,$e=null,Lt=null,rn=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,w=null,b=null,y=null,P=null,A=new Z(0,0,0),E=0,N=!1,W=null,v=null,S=null,F=null,B=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,z=0,ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ne)[1]),J=z>=1):ne.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),J=z>=2);let G=null,de={},fe=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Je=new et().fromArray(fe),at=new et().fromArray(Me);function X(I,he,V,K){let le=new Uint8Array(4),ue=s.createTexture();s.bindTexture(I,ue),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<V;$e++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(he+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return ue}let Q={};Q[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_e(s.DEPTH_TEST),r.setFunc(Ls),We(!1),Ke(lu),_e(s.CULL_FACE),C(qn);function _e(I){c[I]!==!0&&(s.enable(I),c[I]=!0)}function pe(I){c[I]!==!1&&(s.disable(I),c[I]=!1)}function Ue(I,he){return u[I]!==he?(s.bindFramebuffer(I,he),u[I]=he,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=he),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Re(I,he){let V=d,K=!1;if(I){V=h.get(he),V===void 0&&(V=[],h.set(he,V));let le=I.textures;if(V.length!==le.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,$e=le.length;ue<$e;ue++)V[ue]=s.COLOR_ATTACHMENT0+ue;V.length=le.length,K=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,K=!0);K&&s.drawBuffers(V)}function qe(I){return f!==I?(s.useProgram(I),f=I,!0):!1}let ht={[$i]:s.FUNC_ADD,[jf]:s.FUNC_SUBTRACT,[Qf]:s.FUNC_REVERSE_SUBTRACT};ht[ep]=s.MIN,ht[tp]=s.MAX;let Ye={[np]:s.ZERO,[ip]:s.ONE,[sp]:s.SRC_COLOR,[Sl]:s.SRC_ALPHA,[hp]:s.SRC_ALPHA_SATURATE,[lp]:s.DST_COLOR,[ap]:s.DST_ALPHA,[rp]:s.ONE_MINUS_SRC_COLOR,[wl]:s.ONE_MINUS_SRC_ALPHA,[cp]:s.ONE_MINUS_DST_COLOR,[op]:s.ONE_MINUS_DST_ALPHA,[up]:s.CONSTANT_COLOR,[dp]:s.ONE_MINUS_CONSTANT_COLOR,[fp]:s.CONSTANT_ALPHA,[pp]:s.ONE_MINUS_CONSTANT_ALPHA};function C(I,he,V,K,le,ue,$e,Lt,rn,je){if(I===qn){g===!0&&(pe(s.BLEND),g=!1);return}if(g===!1&&(_e(s.BLEND),g=!0),I!==Jf){if(I!==x||je!==N){if((m!==$i||b!==$i)&&(s.blendEquation(s.FUNC_ADD),m=$i,b=$i),je)switch(I){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Is:s.blendFunc(s.ONE,s.ONE);break;case cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Is:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case cu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,w=null,y=null,P=null,A.set(0,0,0),E=0,x=I,N=je}return}le=le||he,ue=ue||V,$e=$e||K,(he!==m||le!==b)&&(s.blendEquationSeparate(ht[he],ht[le]),m=he,b=le),(V!==p||K!==w||ue!==y||$e!==P)&&(s.blendFuncSeparate(Ye[V],Ye[K],Ye[ue],Ye[$e]),p=V,w=K,y=ue,P=$e),(Lt.equals(A)===!1||rn!==E)&&(s.blendColor(Lt.r,Lt.g,Lt.b,rn),A.copy(Lt),E=rn),x=I,N=!1}function un(I,he){I.side===on?pe(s.CULL_FACE):_e(s.CULL_FACE);let V=I.side===Qt;he&&(V=!V),We(V),I.blending===Si&&I.transparent===!1?C(qn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),i.setMask(I.colorWrite);let K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){W!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),W=I)}function Ke(I){I!==Kf?(_e(s.CULL_FACE),I!==v&&(I===lu?s.cullFace(s.BACK):I===Zf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),v=I}function Pe(I){I!==S&&(J&&s.lineWidth(I),S=I)}function _t(I,he,V){I?(_e(s.POLYGON_OFFSET_FILL),(F!==he||B!==V)&&(s.polygonOffset(he,V),F=he,B=V)):pe(s.POLYGON_OFFSET_FILL)}function De(I){I?_e(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function T(I){I===void 0&&(I=s.TEXTURE0+H-1),G!==I&&(s.activeTexture(I),G=I)}function _(I,he,V){V===void 0&&(G===null?V=s.TEXTURE0+H-1:V=G);let K=de[V];K===void 0&&(K={type:void 0,texture:void 0},de[V]=K),(K.type!==I||K.texture!==he)&&(G!==V&&(s.activeTexture(V),G=V),s.bindTexture(I,he||Q[I]),K.type=I,K.texture=he)}function U(){let I=de[G];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Je.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function xe(I){at.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),at.copy(I))}function Xe(I,he){let V=l.get(he);V===void 0&&(V=new WeakMap,l.set(he,V));let K=V.get(I);K===void 0&&(K=s.getUniformBlockIndex(he,I.name),V.set(I,K))}function Oe(I,he){let K=l.get(he).get(I);o.get(he)!==K&&(s.uniformBlockBinding(he,K,I.__bindingPointIndex),o.set(he,K))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,de={},u={},h=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,w=null,b=null,y=null,P=null,A=new Z(0,0,0),E=0,N=!1,W=null,v=null,S=null,F=null,B=null,Je.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:_e,disable:pe,bindFramebuffer:Ue,drawBuffers:Re,useProgram:qe,setBlending:C,setMaterial:un,setFlipSided:We,setCullFace:Ke,setLineWidth:Pe,setPolygonOffset:_t,setScissorTest:De,activeTexture:T,bindTexture:_,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:ge,texImage3D:Ie,updateUBOMapping:Xe,uniformBlockBinding:Oe,texStorage2D:Ze,texStorage3D:te,texSubImage2D:q,texSubImage3D:Se,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:Le,viewport:xe,reset:xt}}function id(s,e,t,n){let i=Nv(n);switch(t){case Ld:return s*e;case Nd:return s*e;case Ud:return s*e*2;case Qc:return s*e/i.components*i.byteLength;case eh:return s*e/i.components*i.byteLength;case Od:return s*e*2/i.components*i.byteLength;case th:return s*e*2/i.components*i.byteLength;case Dd:return s*e*3/i.components*i.byteLength;case En:return s*e*4/i.components*i.byteLength;case nh:return s*e*4/i.components*i.byteLength;case Ta:case Ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ul:case kl:return Math.max(s,16)*Math.max(e,8)/4;case Nl:case Ol:return Math.max(s,8)*Math.max(e,8)/2;case Fl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ca:case tc:case nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case kd:case ic:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nv(s){switch(s){case oi:case Cd:return{byteLength:1,components:1};case Er:case Pd:case _n:return{byteLength:2,components:1};case Jc:case jc:return{byteLength:2,components:4};case ji:case Zc:case Fn:return{byteLength:4,components:1};case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Uv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):Ar("canvas")}function x(T,_,U){let Y=1,j=De(T);if((j.width>U||j.height>U)&&(Y=U/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let q=Math.floor(Y*j.width),Se=Math.floor(Y*j.height);h===void 0&&(h=g(q,Se));let ae=_?g(q,Se):h;return ae.width=q,ae.height=Se,ae.getContext("2d").drawImage(T,0,0,q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Se+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==jt&&T.minFilter!==$t}function p(T){s.generateMipmap(T)}function w(T,_,U,Y,j=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=_;if(_===s.RED&&(U===s.FLOAT&&(q=s.R32F),U===s.HALF_FLOAT&&(q=s.R16F),U===s.UNSIGNED_BYTE&&(q=s.R8)),_===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.R8UI),U===s.UNSIGNED_SHORT&&(q=s.R16UI),U===s.UNSIGNED_INT&&(q=s.R32UI),U===s.BYTE&&(q=s.R8I),U===s.SHORT&&(q=s.R16I),U===s.INT&&(q=s.R32I)),_===s.RG&&(U===s.FLOAT&&(q=s.RG32F),U===s.HALF_FLOAT&&(q=s.RG16F),U===s.UNSIGNED_BYTE&&(q=s.RG8)),_===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RG8UI),U===s.UNSIGNED_SHORT&&(q=s.RG16UI),U===s.UNSIGNED_INT&&(q=s.RG32UI),U===s.BYTE&&(q=s.RG8I),U===s.SHORT&&(q=s.RG16I),U===s.INT&&(q=s.RG32I)),_===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RGB8UI),U===s.UNSIGNED_SHORT&&(q=s.RGB16UI),U===s.UNSIGNED_INT&&(q=s.RGB32UI),U===s.BYTE&&(q=s.RGB8I),U===s.SHORT&&(q=s.RGB16I),U===s.INT&&(q=s.RGB32I)),_===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),U===s.UNSIGNED_INT&&(q=s.RGBA32UI),U===s.BYTE&&(q=s.RGBA8I),U===s.SHORT&&(q=s.RGBA16I),U===s.INT&&(q=s.RGBA32I)),_===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),_===s.RGBA){let Se=j?Ia:ze.getTransfer(Y);U===s.FLOAT&&(q=s.RGBA32F),U===s.HALF_FLOAT&&(q=s.RGBA16F),U===s.UNSIGNED_BYTE&&(q=Se===pt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(T,_){let U;return T?_===null||_===ji||_===Us?U=s.DEPTH24_STENCIL8:_===Fn?U=s.DEPTH32F_STENCIL8:_===Er&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ji||_===Us?U=s.DEPTH_COMPONENT24:_===Fn?U=s.DEPTH_COMPONENT32F:_===Er&&(U=s.DEPTH_COMPONENT16),U}function y(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==$t?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function P(T){let _=T.target;_.removeEventListener("dispose",P),E(_),_.isVideoTexture&&u.delete(_)}function A(T){let _=T.target;_.removeEventListener("dispose",A),W(_)}function E(T){let _=n.get(T);if(_.__webglInit===void 0)return;let U=T.source,Y=d.get(U);if(Y){let j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&N(T),Object.keys(Y).length===0&&d.delete(U)}n.remove(T)}function N(T){let _=n.get(T);s.deleteTexture(_.__webglTexture);let U=T.source,Y=d.get(U);delete Y[_.__cacheKey],a.memory.textures--}function W(T){let _=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[Y]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let U=T.textures;for(let Y=0,j=U.length;Y<j;Y++){let q=n.get(U[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[Y])}n.remove(T)}let v=0;function S(){v=0}function F(){let T=v;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),v+=1,T}function B(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function H(T,_){let U=n.get(T);if(T.isVideoTexture&&Pe(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(U,T,_);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+_)}function J(T,_){let U=n.get(T);if(T.version>0&&U.__version!==T.version){at(U,T,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+_)}function z(T,_){let U=n.get(T);if(T.version>0&&U.__version!==T.version){at(U,T,_);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+_)}function ne(T,_){let U=n.get(T);if(T.version>0&&U.__version!==T.version){X(U,T,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+_)}let G={[Ji]:s.REPEAT,[kn]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},de={[jt]:s.NEAREST,[Kc]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[yr]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},fe={[Sp]:s.NEVER,[Cp]:s.ALWAYS,[wp]:s.LESS,[zd]:s.LEQUAL,[Tp]:s.EQUAL,[Rp]:s.GEQUAL,[Ep]:s.GREATER,[Ap]:s.NOTEQUAL};function Me(T,_){if(_.type===Fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===$t||_.magFilter===yr||_.magFilter===Es||_.magFilter===Xn||_.minFilter===$t||_.minFilter===yr||_.minFilter===Es||_.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,G[_.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,G[_.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,G[_.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,de[_.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==Es&&_.minFilter!==Xn||_.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Je(T,_){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",P));let Y=_.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let q=B(_);if(q!==T.__cacheKey){j[q]===void 0&&(j[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[q].usedTimes++;let Se=j[T.__cacheKey];Se!==void 0&&(j[T.__cacheKey].usedTimes--,Se.usedTimes===0&&N(_)),T.__cacheKey=q,T.__webglTexture=j[q].texture}return U}function at(T,_,U){let Y=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=s.TEXTURE_3D);let j=Je(T,_),q=_.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+U);let Se=n.get(q);if(q.version!==Se.__version||j===!0){t.activeTexture(s.TEXTURE0+U);let ae=ze.getPrimaries(ze.workingColorSpace),me=_.colorSpace===Wn?null:ze.getPrimaries(_.colorSpace),Ze=_.colorSpace===Wn||ae===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let te=x(_.image,!1,i.maxTextureSize);te=_t(_,te);let ge=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type),Le=w(_.internalFormat,ge,Ie,_.colorSpace,_.isVideoTexture);Me(Y,_);let xe,Xe=_.mipmaps,Oe=_.isVideoTexture!==!0,xt=Se.__version===void 0||j===!0,I=q.dataReady,he=y(_,te);if(_.isDepthTexture)Le=b(_.format===Os,_.type),xt&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Le,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Le,te.width,te.height,0,ge,Ie,null));else if(_.isDataTexture)if(Xe.length>0){Oe&&xt&&t.texStorage2D(s.TEXTURE_2D,he,Le,Xe[0].width,Xe[0].height);for(let V=0,K=Xe.length;V<K;V++)xe=Xe[V],Oe?I&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,ge,Ie,xe.data):t.texImage2D(s.TEXTURE_2D,V,Le,xe.width,xe.height,0,ge,Ie,xe.data);_.generateMipmaps=!1}else Oe?(xt&&t.texStorage2D(s.TEXTURE_2D,he,Le,te.width,te.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,ge,Ie,te.data)):t.texImage2D(s.TEXTURE_2D,0,Le,te.width,te.height,0,ge,Ie,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Le,Xe[0].width,Xe[0].height,te.depth);for(let V=0,K=Xe.length;V<K;V++)if(xe=Xe[V],_.format!==En)if(ge!==null)if(Oe){if(I)if(_.layerUpdates.size>0){let le=id(xe.width,xe.height,_.format,_.type);for(let ue of _.layerUpdates){let $e=xe.data.subarray(ue*le/xe.data.BYTES_PER_ELEMENT,(ue+1)*le/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,ue,xe.width,xe.height,1,ge,$e,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xe.width,xe.height,te.depth,ge,xe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Le,xe.width,xe.height,te.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xe.width,xe.height,te.depth,ge,Ie,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,Le,xe.width,xe.height,te.depth,0,ge,Ie,xe.data)}else{Oe&&xt&&t.texStorage2D(s.TEXTURE_2D,he,Le,Xe[0].width,Xe[0].height);for(let V=0,K=Xe.length;V<K;V++)xe=Xe[V],_.format!==En?ge!==null?Oe?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,V,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,ge,Ie,xe.data):t.texImage2D(s.TEXTURE_2D,V,Le,xe.width,xe.height,0,ge,Ie,xe.data)}else if(_.isDataArrayTexture)if(Oe){if(xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Le,te.width,te.height,te.depth),I)if(_.layerUpdates.size>0){let V=id(te.width,te.height,_.format,_.type);for(let K of _.layerUpdates){let le=te.data.subarray(K*V/te.data.BYTES_PER_ELEMENT,(K+1)*V/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ge,Ie,le)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Ie,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,ge,Ie,te.data);else if(_.isData3DTexture)Oe?(xt&&t.texStorage3D(s.TEXTURE_3D,he,Le,te.width,te.height,te.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Ie,te.data)):t.texImage3D(s.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,ge,Ie,te.data);else if(_.isFramebufferTexture){if(xt)if(Oe)t.texStorage2D(s.TEXTURE_2D,he,Le,te.width,te.height);else{let V=te.width,K=te.height;for(let le=0;le<he;le++)t.texImage2D(s.TEXTURE_2D,le,Le,V,K,0,ge,Ie,null),V>>=1,K>>=1}}else if(Xe.length>0){if(Oe&&xt){let V=De(Xe[0]);t.texStorage2D(s.TEXTURE_2D,he,Le,V.width,V.height)}for(let V=0,K=Xe.length;V<K;V++)xe=Xe[V],Oe?I&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,ge,Ie,xe):t.texImage2D(s.TEXTURE_2D,V,Le,ge,Ie,xe);_.generateMipmaps=!1}else if(Oe){if(xt){let V=De(te);t.texStorage2D(s.TEXTURE_2D,he,Le,V.width,V.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,Ie,te)}else t.texImage2D(s.TEXTURE_2D,0,Le,ge,Ie,te);m(_)&&p(Y),Se.__version=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function X(T,_,U){if(_.image.length!==6)return;let Y=Je(T,_),j=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+U);let q=n.get(j);if(j.version!==q.__version||Y===!0){t.activeTexture(s.TEXTURE0+U);let Se=ze.getPrimaries(ze.workingColorSpace),ae=_.colorSpace===Wn?null:ze.getPrimaries(_.colorSpace),me=_.colorSpace===Wn||Se===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ze=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!Ze&&!te?ge[K]=x(_.image[K],!0,i.maxCubemapSize):ge[K]=te?_.image[K].image:_.image[K],ge[K]=_t(_,ge[K]);let Ie=ge[0],Le=r.convert(_.format,_.colorSpace),xe=r.convert(_.type),Xe=w(_.internalFormat,Le,xe,_.colorSpace),Oe=_.isVideoTexture!==!0,xt=q.__version===void 0||Y===!0,I=j.dataReady,he=y(_,Ie);Me(s.TEXTURE_CUBE_MAP,_);let V;if(Ze){Oe&&xt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Xe,Ie.width,Ie.height);for(let K=0;K<6;K++){V=ge[K].mipmaps;for(let le=0;le<V.length;le++){let ue=V[le];_.format!==En?Le!==null?Oe?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,ue.width,ue.height,Le,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,ue.width,ue.height,Le,xe,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Xe,ue.width,ue.height,0,Le,xe,ue.data)}}}else{if(V=_.mipmaps,Oe&&xt){V.length>0&&he++;let K=De(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Xe,K.width,K.height)}for(let K=0;K<6;K++)if(te){Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,Le,xe,ge[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,ge[K].width,ge[K].height,0,Le,xe,ge[K].data);for(let le=0;le<V.length;le++){let $e=V[le].image[K].image;Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,$e.width,$e.height,Le,xe,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Xe,$e.width,$e.height,0,Le,xe,$e.data)}}else{Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,xe,ge[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,Le,xe,ge[K]);for(let le=0;le<V.length;le++){let ue=V[le];Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Le,xe,ue.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Xe,Le,xe,ue.image[K])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),q.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,U,Y,j,q){let Se=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),me=w(U.internalFormat,Se,ae,U.colorSpace);if(!n.get(_).__hasExternalTextures){let te=Math.max(1,_.width>>q),ge=Math.max(1,_.height>>q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,q,me,te,ge,_.depth,0,Se,ae,null):t.texImage2D(j,q,me,te,ge,0,Se,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Ke(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,n.get(U).__webglTexture,0,We(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,n.get(U).__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(T,_,U){if(s.bindRenderbuffer(s.RENDERBUFFER,T),_.depthBuffer){let Y=_.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=b(_.stencilBuffer,j),Se=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=We(_);Ke(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,q,_.width,_.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,q,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,q,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,T)}else{let Y=_.textures;for(let j=0;j<Y.length;j++){let q=Y[j],Se=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),me=w(q.internalFormat,Se,ae,q.colorSpace),Ze=We(_);U&&Ke(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,me,_.width,_.height):Ke(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,me,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,me,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);let Y=n.get(_.depthTexture).__webglTexture,j=We(_);if(_.depthTexture.format===Rs)Ke(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(_.depthTexture.format===Os)Ke(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ue(T){let _=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Y}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");pe(_.__webglFramebuffer,T)}else if(U){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=s.createRenderbuffer(),_e(_.__webglDepthbuffer[Y],T,!1);else{let j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),_e(_.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,j)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(T,_,U){let Y=n.get(T);_!==void 0&&Q(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Ue(T)}function qe(T){let _=T.texture,U=n.get(T),Y=n.get(_);T.addEventListener("dispose",A);let j=T.textures,q=T.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=_.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let me=0;me<_.mipmaps.length;me++)U.__webglFramebuffer[ae][me]=s.createFramebuffer()}else U.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)U.__webglFramebuffer[ae]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(Se)for(let ae=0,me=j.length;ae<me;ae++){let Ze=n.get(j[ae]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Ke(T)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){let me=j[ae];U.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);let Ze=r.convert(me.format,me.colorSpace),te=r.convert(me.type),ge=w(me.internalFormat,Ze,te,me.colorSpace,T.isXRRenderTarget===!0),Ie=We(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,ge,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Me(s.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Q(U.__webglFramebuffer[ae][me],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else Q(U.__webglFramebuffer[ae],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ae=0,me=j.length;ae<me;ae++){let Ze=j[ae],te=n.get(Ze);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),Me(s.TEXTURE_2D,Ze),Q(U.__webglFramebuffer,T,Ze,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,0),m(Ze)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),Me(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Q(U.__webglFramebuffer[me],T,_,s.COLOR_ATTACHMENT0,ae,me);else Q(U.__webglFramebuffer,T,_,s.COLOR_ATTACHMENT0,ae,0);m(_)&&p(ae),t.unbindTexture()}T.depthBuffer&&Ue(T)}function ht(T){let _=T.textures;for(let U=0,Y=_.length;U<Y;U++){let j=_[U];if(m(j)){let q=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Se=n.get(j).__webglTexture;t.bindTexture(q,Se),p(q),t.unbindTexture()}}}let Ye=[],C=[];function un(T){if(T.samples>0){if(Ke(T)===!1){let _=T.textures,U=T.width,Y=T.height,j=s.COLOR_BUFFER_BIT,q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(T),ae=_.length>1;if(ae)for(let me=0;me<_.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<_.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let Ze=n.get(_[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,U,Y,0,0,U,Y,j,s.NEAREST),l===!0&&(Ye.length=0,C.length=0,Ye.push(s.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ye.push(q),C.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let me=0;me<_.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let Ze=n.get(_[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function We(T){return Math.min(i.maxSamples,T.samples)}function Ke(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pe(T){let _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function _t(T,_){let U=T.colorSpace,Y=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Nt&&U!==Wn&&(ze.getTransfer(U)===pt?(Y!==En||j!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function De(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=S,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=z,this.setTextureCube=ne,this.rebindTextures=Re,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ke}function Ov(s,e){function t(n,i=Wn){let r,a=ze.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===Jc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Cd)return s.BYTE;if(n===Pd)return s.SHORT;if(n===Er)return s.UNSIGNED_SHORT;if(n===Zc)return s.INT;if(n===ji)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===Ld)return s.ALPHA;if(n===Dd)return s.RGB;if(n===En)return s.RGBA;if(n===Nd)return s.LUMINANCE;if(n===Ud)return s.LUMINANCE_ALPHA;if(n===Rs)return s.DEPTH_COMPONENT;if(n===Os)return s.DEPTH_STENCIL;if(n===Qc)return s.RED;if(n===eh)return s.RED_INTEGER;if(n===Od)return s.RG;if(n===th)return s.RG_INTEGER;if(n===nh)return s.RGBA_INTEGER;if(n===Ta||n===Ea||n===Aa||n===Ra)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Ul||n===Ol||n===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Bl||n===zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fl||n===Bl)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Kl||n===Zl||n===Jl||n===jl||n===Ql||n===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===tc||n===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ca)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kd||n===ic||n===sc||n===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function Hv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,qi.copy(y),qi.x*=-1,qi.y*=-1,qi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(zv.makeRotationFromEuler(qi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vv(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let y=b.program;n.uniformBlockBinding(w,y)}function c(w,b){let y=i[w.id];y===void 0&&(g(w),y=u(w),i[w.id]=y,w.addEventListener("dispose",m));let P=b.program;n.updateUBOMapping(w,P);let A=e.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function u(w){let b=h();w.__bindingPointIndex=b;let y=s.createBuffer(),P=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,y),y}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let b=i[w.id],y=w.uniforms,P=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,E=y.length;A<E;A++){let N=Array.isArray(y[A])?y[A]:[y[A]];for(let W=0,v=N.length;W<v;W++){let S=N[W];if(f(S,A,W,P)===!0){let F=S.__offset,B=Array.isArray(S.value)?S.value:[S.value],H=0;for(let J=0;J<B.length;J++){let z=B[J],ne=x(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,F+H,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,H),H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,b,y,P){let A=w.value,E=b+"_"+y;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{let N=P[E];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return P[E]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(w){let b=w.uniforms,y=0,P=16;for(let E=0,N=b.length;E<N;E++){let W=Array.isArray(b[E])?b[E]:[b[E]];for(let v=0,S=W.length;v<S;v++){let F=W[v],B=Array.isArray(F.value)?F.value:[F.value];for(let H=0,J=B.length;H<J;H++){let z=B[H],ne=x(z),G=y%P,de=G%ne.boundary,fe=G+de;y+=de,fe!==0&&P-fe<ne.storage&&(y+=P-fe),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=ne.storage}}}let A=y%P;return A>0&&(y+=P-A),w.__size=y,w.__cache={},this}function x(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}function _a(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(Ya.fromBufferAttribute(a,i),$a.fromBufferAttribute(a,r),t.distanceSqToSegment(Ya,$a,xl,fd)>n)return;xl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(xl);if(!(l<e.near||l>e.far))return{distance:l,point:fd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}function xd(s,e,t,n,i,r,a){let o=Sc.distanceSqToPoint(s);if(o<t){let l=new R;Sc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function ah(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}function vd(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function qv(s,e){let t=1-s;return t*t*e}function Yv(s,e){return 2*(1-s)*s*e}function $v(s,e){return s*s*e}function Sr(s,e,t,n){return qv(s,e)+Yv(s,t)+$v(s,n)}function Kv(s,e){let t=1-s;return t*t*t*e}function Zv(s,e){let t=1-s;return 3*t*t*s*e}function Jv(s,e){return 3*(1-s)*s*s*e}function jv(s,e){return s*s*s*e}function wr(s,e,t,n,i){return Kv(s,e)+Zv(s,t)+Jv(s,n)+jv(s,i)}function wa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ey(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ty(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function yd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Kd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function ny(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return li;case"vector":case"vector2":case"vector3":case"vector4":return hi;case"color":return to;case"quaternion":return ci;case"bool":case"boolean":return Ri;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function iy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ny(s.type);if(s.times===void 0){let t=[],n=[];Kd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}function Sd(){return performance.now()}function Td(s,e){return s.distance-e.distance}function Vc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Vc(r[a],e,t,!0)}}var Kf,lu,Zf,Ed,Gc,ri,Yn,Qt,on,qn,Si,Is,cu,hu,Jf,$i,jf,Qf,ep,tp,np,ip,sp,rp,Sl,wl,ap,op,lp,cp,hp,up,dp,fp,pp,Tl,El,Al,Ls,Rl,Cl,Pl,Il,Ad,mp,gp,wi,Wc,Xc,qc,Fr,xp,Yc,$c,uu,vp,Rd,Ds,Ns,Ll,Dl,co,Ji,kn,Tr,jt,Kc,Es,$t,yr,Xn,oi,Cd,Pd,Er,Zc,ji,Fn,_n,Jc,jc,Us,Id,Ld,Dd,En,Nd,Ud,Rs,Os,Qc,eh,Od,th,nh,Ta,Ea,Aa,Ra,Nl,Ul,Ol,kl,Fl,Bl,zl,Hl,Vl,Gl,Wl,Xl,ql,Yl,$l,Kl,Zl,Jl,jl,Ql,ec,Ca,tc,nc,kd,ic,sc,rc,ks,Fs,Ho,du,fu,pu,yp,Fd,ho,Br,_p,bp,Bd,Mp,Wn,St,Nt,ih,uo,Ia,pt,La,Da,us,mu,Sp,wp,Tp,zd,Ep,Ap,Rp,Cp,ac,zr,gu,ai,Na,Ti,Zt,xu,_r,Bs,is,re,Fe,Vo,vu,yu,_u,cr,Zp,ze,ds,oc,Jp,Ua,jp,Ft,et,lc,Kt,Oa,cc,zn,R,Xo,bu,Wt,Qn,Dn,Jr,fs,ps,ms,gi,xi,Hi,hr,jr,Qr,Vi,Qp,ur,Yo,xn,ei,$o,ea,vi,Ko,ta,Zo,Qi,Ne,gs,Nn,em,tm,yi,na,pn,Mu,Su,$n,Rr,nm,wu,xs,ti,ia,dr,im,sm,Tu,Eu,Au,Ru,rm,vs,Jo,Mt,Un,ni,jo,ii,ys,_s,Cu,Qo,el,tl,nl,il,sl,Ki,Vd,_i,sa,Z,Jt,am,vn,gt,Dt,ra,mt,ka,Fa,ct,om,Tn,al,bs,mn,fr,Vt,Rt,Pu,Gi,aa,Iu,oa,la,ca,ol,ha,Lu,ua,Ee,ln,Li,hm,um,yt,Ba,bi,Du,Nu,Ot,Ms,Ss,hc,za,uc,ll,dm,fm,gn,Wi,fa,Cr,Hs,mm,gm,xm,vm,ym,_m,bm,Mm,Sm,wm,Tm,Em,Am,Rm,Cm,Pm,Im,Lm,Dm,Nm,Um,Om,km,Fm,Bm,zm,Hm,Vm,Gm,Wm,Xm,qm,Ym,$m,Km,Zm,Jm,jm,Qm,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,vg,yg,_g,bg,Mg,Sg,wg,Tg,Eg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ng,Ug,Og,kg,Fg,Bg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,$g,Kg,Zg,Jg,jg,Qg,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,h0,u0,d0,f0,p0,m0,g0,x0,v0,y0,_0,b0,M0,S0,w0,T0,E0,A0,R0,C0,P0,I0,L0,D0,N0,U0,O0,k0,F0,B0,z0,H0,V0,G0,W0,X0,q0,Y0,ke,se,Gn,pa,Xi,$0,Ei,As,Uu,Zi,cl,Ou,hl,ul,dl,fl,Yi,ws,ku,Vs,Ha,Xd,Hu,qd,Yd,$d,Vu,Gu,Wu,Xu,qu,dc,fc,pc,pl,Ps,Jx,jx,ga,ov,lv,hv,vv,gc,xc,Tv,vc,yc,Cv,Pv,Lv,_c,kt,kv,Mr,Fv,Bv,bc,Mc,qi,zv,Va,Ga,Pr,Ir,nn,Lr,sd,rd,ad,Gv,od,xa,ml,ld,gl,Wa,Dr,Xa,cd,Wv,qa,es,Ts,hd,va,ud,Xv,pr,mr,Gs,Nr,Ya,$a,dd,gr,ya,xl,fd,Ws,pd,md,Ka,Za,Ur,gd,Sc,ba,Ma,Xs,Hn,Ja,wc,Sa,vl,yl,_l,ts,Tc,Ec,Ac,Rc,Cc,ja,Pc,Qv,An,Or,en,Qa,eo,tt,yn,Ai,Ic,Lc,Dc,Rn,Ri,to,li,Nc,ci,Ci,hi,no,Mi,Uc,sy,Vn,si,Oc,Pi,kc,io,qs,so,bl,_d,bd,kr,Fc,ro,Md,xr,Ml,Bc,ao,zc,ns,Ii,oo,lo,oh,ry,lh,ay,oy,ly,cy,hy,uy,dy,Hc,vt,qy,wd,Ys,wt=Qe(()=>{Kf=0,lu=1,Zf=2,Ed=1,Gc=2,ri=3,Yn=0,Qt=1,on=2,qn=0,Si=1,Is=2,cu=3,hu=4,Jf=5,$i=100,jf=101,Qf=102,ep=103,tp=104,np=200,ip=201,sp=202,rp=203,Sl=204,wl=205,ap=206,op=207,lp=208,cp=209,hp=210,up=211,dp=212,fp=213,pp=214,Tl=0,El=1,Al=2,Ls=3,Rl=4,Cl=5,Pl=6,Il=7,Ad=0,mp=1,gp=2,wi=0,Wc=1,Xc=2,qc=3,Fr=4,xp=5,Yc=6,$c=7,uu="attached",vp="detached",Rd=300,Ds=301,Ns=302,Ll=303,Dl=304,co=306,Ji=1e3,kn=1001,Tr=1002,jt=1003,Kc=1004,Es=1005,$t=1006,yr=1007,Xn=1008,oi=1009,Cd=1010,Pd=1011,Er=1012,Zc=1013,ji=1014,Fn=1015,_n=1016,Jc=1017,jc=1018,Us=1020,Id=35902,Ld=1021,Dd=1022,En=1023,Nd=1024,Ud=1025,Rs=1026,Os=1027,Qc=1028,eh=1029,Od=1030,th=1031,nh=1033,Ta=33776,Ea=33777,Aa=33778,Ra=33779,Nl=35840,Ul=35841,Ol=35842,kl=35843,Fl=36196,Bl=37492,zl=37496,Hl=37808,Vl=37809,Gl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,$l=37815,Kl=37816,Zl=37817,Jl=37818,jl=37819,Ql=37820,ec=37821,Ca=36492,tc=36494,nc=36495,kd=36283,ic=36284,sc=36285,rc=36286,ks=2300,Fs=2301,Ho=2302,du=2400,fu=2401,pu=2402,yp=2500,Fd=0,ho=1,Br=2,_p=3200,bp=3201,Bd=0,Mp=1,Wn="",St="srgb",Nt="srgb-linear",ih="display-p3",uo="display-p3-linear",Ia="linear",pt="srgb",La="rec709",Da="p3",us=7680,mu=519,Sp=512,wp=513,Tp=514,zd=515,Ep=516,Ap=517,Rp=518,Cp=519,ac=35044,zr=35048,gu="300 es",ai=2e3,Na=2001,Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,_r=Math.PI/180,Bs=180/Math.PI;is={DEG2RAD:_r,RAD2DEG:Bs,generateUUID:Bn,clamp:Gt,euclideanModulo:sh,mapLinear:Pp,inverseLerp:Ip,lerp:br,damp:Lp,pingpong:Dp,smoothstep:Np,smootherstep:Up,randInt:Op,randFloat:kp,randFloatSpread:Fp,seededRandom:Bp,degToRad:zp,radToDeg:Hp,isPowerOfTwo:Vp,ceilPowerOfTwo:Gp,floorPowerOfTwo:Wp,setQuaternionFromProperEuler:Xp,normalize:lt,denormalize:On},re=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],w=i[1],b=i[4],y=i[7],P=i[2],A=i[5],E=i[8];return r[0]=a*x+o*w+l*P,r[3]=a*m+o*b+l*A,r[6]=a*p+o*y+l*E,r[1]=c*x+u*w+h*P,r[4]=c*m+u*b+h*A,r[7]=c*p+u*y+h*E,r[2]=d*x+f*w+g*P,r[5]=d*m+f*b+g*A,r[8]=d*p+f*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vo=new Fe;vu={};yu=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_u=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[Nt]:{transfer:Ia,primaries:La,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[St]:{transfer:pt,primaries:La,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[uo]:{transfer:Ia,primaries:Da,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(_u),fromReference:s=>s.applyMatrix3(yu)},[ih]:{transfer:pt,primaries:Da,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(_u),fromReference:s=>s.applyMatrix3(yu).convertLinearToSRGB()}},Zp=new Set([Nt,uo]),ze={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Zp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=cr[e].toReference,i=cr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return cr[s].primaries},getTransfer:function(s){return s===Wn?Ia:cr[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(cr[e].luminanceCoefficients)}};oc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Ar("canvas")),ds.width=e.width,ds.height=e.height;let n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cs(t[n]/255)*255):t[n]=Cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jp=0,Ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Wo(i[a].image)):r.push(Wo(i[a]))}else r=Wo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};jp=0,Ft=class s extends Ti{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=kn,i=kn,r=$t,a=Xn,o=En,l=oi,c=s.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Bn(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Rd;Ft.DEFAULT_ANISOTROPY=1;et=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,P=(p+1)/2,A=(u+d)/4,E=(h+x)/4,N=(g+m)/4;return b>y&&b>P?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=E/n):y>P?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=N/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=E/r,i=N/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-x)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lc=class extends Ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends lc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oa=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},cc=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-o,p=l*d+c*f+u*g+h*x,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let P=Math.sqrt(b),A=Math.atan2(P,p*w);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}let y=o*w;if(l=l*m+d*y,c=c*m+f*y,u=u*m+g*y,h=h*m+x*y,m===1-o){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new R,bu=new zn,Wt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),jr.subVectors(this.max,hr),fs.subVectors(e.a,hr),ps.subVectors(e.b,hr),ms.subVectors(e.c,hr),gi.subVectors(ps,fs),xi.subVectors(ms,ps),Hi.subVectors(fs,ms);let t=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Hi.z,Hi.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Hi.z,0,-Hi.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Hi.y,Hi.x,0];return!qo(t,fs,ps,ms,jr)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,fs,ps,ms,jr))?!1:(Qr.crossVectors(gi,xi),t=[Qr.x,Qr.y,Qr.z],qo(t,fs,ps,ms,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qn=[new R,new R,new R,new R,new R,new R,new R,new R],Dn=new R,Jr=new Wt,fs=new R,ps=new R,ms=new R,gi=new R,xi=new R,Hi=new R,hr=new R,jr=new R,Qr=new R,Vi=new R;Qp=new Wt,ur=new R,Yo=new R,xn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Yo)),this.expandByPoint(ur.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new R,$o=new R,ea=new R,vi=new R,Ko=new R,ta=new R,Zo=new R,Qi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$o.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),vi.copy(this.origin).sub($o);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=vi.dot(this.direction),l=-vi.dot(ea),c=vi.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($o).addScaledVector(ea,d),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,r){Ko.subVectors(t,e),ta.subVectors(n,e),Zo.crossVectors(Ko,ta);let a=this.direction.dot(Zo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);let l=o*this.direction.dot(ta.crossVectors(vi,ta));if(l<0)return null;let c=o*this.direction.dot(Ko.cross(vi));if(c<0||l+c>a)return null;let u=-o*vi.dot(Zo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class s{constructor(e,t,n,i,r,a,o,l,c,u,h,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,f,g,x,m)}set(e,t,n,i,r,a,o,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,n){let i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),yi.crossVectors(n,pn),yi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),yi.crossVectors(n,pn)),yi.normalize(),na.crossVectors(pn,yi),i[0]=yi.x,i[4]=na.x,i[8]=pn.x,i[1]=yi.y,i[5]=na.y,i[9]=pn.y,i[2]=yi.z,i[6]=na.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],b=n[7],y=n[11],P=n[15],A=i[0],E=i[4],N=i[8],W=i[12],v=i[1],S=i[5],F=i[9],B=i[13],H=i[2],J=i[6],z=i[10],ne=i[14],G=i[3],de=i[7],fe=i[11],Me=i[15];return r[0]=a*A+o*v+l*H+c*G,r[4]=a*E+o*S+l*J+c*de,r[8]=a*N+o*F+l*z+c*fe,r[12]=a*W+o*B+l*ne+c*Me,r[1]=u*A+h*v+d*H+f*G,r[5]=u*E+h*S+d*J+f*de,r[9]=u*N+h*F+d*z+f*fe,r[13]=u*W+h*B+d*ne+f*Me,r[2]=g*A+x*v+m*H+p*G,r[6]=g*E+x*S+m*J+p*de,r[10]=g*N+x*F+m*z+p*fe,r[14]=g*W+x*B+m*ne+p*Me,r[3]=w*A+b*v+y*H+P*G,r[7]=w*E+b*S+y*J+P*de,r[11]=w*N+b*F+y*z+P*fe,r[15]=w*W+b*B+y*ne+P*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=h*m*c-x*d*c+x*l*f-o*m*f-h*l*p+o*d*p,b=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,y=u*x*c-g*h*c+g*o*f-a*x*f-u*o*p+a*h*p,P=g*h*l-u*x*l-g*o*d+a*x*d+u*o*m-a*h*m,A=t*w+n*b+i*y+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=w*E,e[1]=(x*d*r-h*m*r-x*i*f+n*m*f+h*i*p-n*d*p)*E,e[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*E,e[4]=b*E,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*E,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*f+t*l*f)*E,e[8]=y*E,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*E,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*E,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*E,e[12]=P*E,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*m+t*h*m)*E,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*m-t*o*m)*E,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,x=a*u,m=a*h,p=o*h,w=l*c,b=l*u,y=l*h,P=n.x,A=n.y,E=n.z;return i[0]=(1-(x+p))*P,i[1]=(f+y)*P,i[2]=(g-b)*P,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(m+w)*A,i[7]=0,i[8]=(g+b)*E,i[9]=(m-w)*E,i[10]=(1-(d+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=gs.set(i[0],i[1],i[2]).length(),a=gs.set(i[4],i[5],i[6]).length(),o=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Nn.copy(this);let c=1/r,u=1/a,h=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ai){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(o===ai)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Na)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ai){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*c,f=(n+i)*u,g,x;if(o===ai)g=(a+r)*h,x=-2*h;else if(o===Na)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gs=new R,Nn=new Ne,em=new R(0,0,0),tm=new R(1,1,1),yi=new R,na=new R,pn=new R,Mu=new Ne,Su=new zn,$n=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nm=0,wu=new R,xs=new zn,ti=new Ne,ia=new R,dr=new R,im=new R,sm=new zn,Tu=new R(1,0,0),Eu=new R(0,1,0),Au=new R(0,0,1),Ru={type:"added"},rm={type:"removed"},vs={type:"childadded",child:null},Jo={type:"childremoved",child:null},Mt=class s extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new $n,n=new zn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Fe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(Au,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(Au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(dr,ia,this.up):ti.lookAt(ia,dr,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(ti),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ru),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rm),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ru),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Mt.DEFAULT_UP=new R(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Un=new R,ni=new R,jo=new R,ii=new R,ys=new R,_s=new R,Cu=new R,Qo=new R,el=new R,tl=new R,nl=new et,il=new et,sl=new et,Ki=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Un.subVectors(i,t),ni.subVectors(n,t),jo.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(ni),l=Un.dot(jo),c=ni.dot(ni),u=ni.dot(jo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(nl,r.x),a.addScaledVector(il,r.y),a.addScaledVector(sl,r.z),a}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),ni.subVectors(e,t),Un.cross(ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Un.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ys.subVectors(i,n),_s.subVectors(r,n),Qo.subVectors(e,n);let l=ys.dot(Qo),c=_s.dot(Qo);if(l<=0&&c<=0)return t.copy(n);el.subVectors(e,i);let u=ys.dot(el),h=_s.dot(el);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ys,a);tl.subVectors(e,r);let f=ys.dot(tl),g=_s.dot(tl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(_s,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Cu.subVectors(r,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Cu,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(ys,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},sa={h:0,s:0,l:0};Z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=sh(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=rl(a,r,e+1/3),this.g=rl(a,r,e),this.b=rl(a,r,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return ze.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Gt(Jt.r*255,0,255))*65536+Math.round(Gt(Jt.g*255,0,255))*256+Math.round(Gt(Jt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,i=Jt.g,r=Jt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=St){ze.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,i=Jt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(sa);let n=br(_i.h,sa.h,t),i=br(_i.s,sa.s,t),r=br(_i.l,sa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Z;Z.NAMES=Vd;am=0,vn=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Si,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=wl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dt=new R,ra=new re,mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ac,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}},ka=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Fa=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ct=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},om=0,Tn=new Ne,al=new Mt,bs=new R,mn=new Wt,fr=new Wt,Vt=new R,Rt=class s extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hd(e)?Fa:ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(mn.min,fr.min),mn.expandByPoint(Vt),Vt.addVectors(mn.max,fr.max),mn.expandByPoint(Vt)):(mn.expandByPoint(fr.min),mn.expandByPoint(fr.max))}mn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Vt.add(bs)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new R,l[N]=new R;let c=new R,u=new R,h=new R,d=new re,f=new re,g=new re,x=new R,m=new R;function p(N,W,v){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,W),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,W),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(S),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(S),o[N].add(x),o[W].add(x),o[v].add(x),l[N].add(m),l[W].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,W=w.length;N<W;++N){let v=w[N],S=v.start,F=v.count;for(let B=S,H=S+F;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new R,y=new R,P=new R,A=new R;function E(N){P.fromBufferAttribute(i,N),A.copy(P);let W=o[N];b.copy(W),b.sub(P.multiplyScalar(P.dot(W))).normalize(),y.crossVectors(A,W);let S=y.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,S)}for(let N=0,W=w.length;N<W;++N){let v=w[N],S=v.start,F=v.count;for(let B=S,H=S+F;B<H;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new mt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pu=new Ne,Gi=new Qi,aa=new xn,Iu=new R,oa=new R,la=new R,ca=new R,ol=new R,ha=new R,Lu=new R,ua=new R,Ee=class extends Mt{constructor(e=new Rt,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(ol.fromBufferAttribute(h,e),a?ha.addScaledVector(ol,u):ha.addScaledVector(ol.sub(t),u))}t.add(ha)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(aa.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(aa,Iu)===null||Gi.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Pu.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Pu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,P=b;y<P;y+=3){let A=o.getX(y),E=o.getX(y+1),N=o.getX(y+2);i=da(this,p,e,n,c,u,h,A,E,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);i=da(this,a,e,n,c,u,h,w,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,P=b;y<P;y+=3){let A=y,E=y+1,N=y+2;i=da(this,p,e,n,c,u,h,A,E,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=m,b=m+1,y=m+2;i=da(this,a,e,n,c,u,h,w,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};ln=class s extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(x,m,p,w,b,y,P,A,E,N,W){let v=y/E,S=P/N,F=y/2,B=P/2,H=A/2,J=E+1,z=N+1,ne=0,G=0,de=new R;for(let fe=0;fe<z;fe++){let Me=fe*S-B;for(let Je=0;Je<J;Je++){let at=Je*v-F;de[x]=at*w,de[m]=Me*b,de[p]=H,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=A>0?1:-1,u.push(de.x,de.y,de.z),h.push(Je/E),h.push(1-fe/N),ne+=1}}for(let fe=0;fe<N;fe++)for(let Me=0;Me<E;Me++){let Je=d+Me+J*fe,at=d+Me+J*(fe+1),X=d+(Me+1)+J*(fe+1),Q=d+(Me+1)+J*fe;l.push(Je,at,Q),l.push(at,X,Q),G+=6}o.addGroup(f,G,W),f+=G,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Li={clone:zs,merge:sn},hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ba=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new R,Du=new re,Nu=new re,Ot=class extends Ba{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Nu),t.subVectors(Nu,Du)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,Ss=1,hc=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ot(Ms,Ss,e,t);i.layers=this.layers,this.add(i);let r=new Ot(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let a=new Ot(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let o=new Ot(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let l=new Ot(Ms,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},za=class extends Ft{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uc=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new za(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ln(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:qn});r.uniforms.tEquirect.value=t;let a=new Ee(i,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=$t),new hc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},ll=new R,dm=new R,fm=new Fe,gn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ll.subVectors(n,t).cross(dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fm.getNormalMatrix(e),i=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new xn,fa=new R,Cr=class{constructor(e=new gn,t=new gn,n=new gn,i=new gn,r=new gn,a=new gn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],w=i[13],b=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+u,m+g,y+w).normalize(),n[3].setComponents(l-a,d-u,m-g,y-w).normalize(),n[4].setComponents(l-o,d-h,m-x,y-b).normalize(),t===ai)n[5].setComponents(l+o,d+h,m+x,y+b).normalize();else if(t===Na)n[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Hs=class s extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let w=p*d-a;for(let b=0;b<c;b++){let y=b*h-r;g.push(y,-w,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let b=w+c*p,y=w+c*(p+1),P=w+1+c*(p+1),A=w+1+c*p;f.push(b,y,A),f.push(y,P,A)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:xm,alphamap_pars_fragment:vm,alphatest_fragment:ym,alphatest_pars_fragment:_m,aomap_fragment:bm,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:wm,begin_vertex:Tm,beginnormal_vertex:Em,bsdfs:Am,iridescence_fragment:Rm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Dm,color_fragment:Nm,color_pars_fragment:Um,color_pars_vertex:Om,color_vertex:km,common:Fm,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Vm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:qm,envmap_fragment:Ym,envmap_common_pars_fragment:$m,envmap_pars_fragment:Km,envmap_pars_vertex:Zm,envmap_physical_pars_fragment:og,envmap_vertex:Jm,fog_vertex:jm,fog_pars_vertex:Qm,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:ag,lights_toon_fragment:lg,lights_toon_pars_fragment:cg,lights_phong_fragment:hg,lights_phong_pars_fragment:ug,lights_physical_fragment:dg,lights_physical_pars_fragment:fg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:vg,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:_g,map_fragment:bg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:wg,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Ag,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Ig,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:Ng,normal_pars_vertex:Ug,normal_vertex:Og,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Hg,opaque_fragment:Vg,packing:Gg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:qg,dithering_pars_fragment:Yg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:Jg,shadowmap_vertex:jg,shadowmask_pars_fragment:Qg,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:x0,cube_vert:v0,cube_frag:y0,depth_vert:_0,depth_frag:b0,distanceRGBA_vert:M0,distanceRGBA_frag:S0,equirect_vert:w0,equirect_frag:T0,linedashed_vert:E0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:I0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:N0,meshnormal_frag:U0,meshphong_vert:O0,meshphong_frag:k0,meshphysical_vert:F0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:H0,points_vert:V0,points_frag:G0,shadow_vert:W0,shadow_frag:X0,sprite_vert:q0,sprite_frag:Y0},se={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Gn={basic:{uniforms:sn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:sn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Z(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:sn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:sn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:sn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Z(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:sn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:sn([se.points,se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:sn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:sn([se.common,se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:sn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:sn([se.sprite,se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:sn([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:sn([se.lights,se.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Gn.physical={uniforms:sn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};pa={r:0,b:0,g:0},Xi=new $n,$0=new Ne;Ei=class extends Ba{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},As=4,Uu=[.125,.215,.35,.446,.526,.582],Zi=20,cl=new Ei,Ou=new Z,hl=null,ul=0,dl=0,fl=!1,Yi=(1+Math.sqrt(5))/2,ws=1/Yi,ku=[new R(-Yi,ws,0),new R(Yi,ws,0),new R(-ws,0,Yi),new R(ws,0,Yi),new R(0,Yi,-ws),new R(0,Yi,ws),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,ul,dl),this._renderer.xr.enabled=fl,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:_n,format:En,colorSpace:Nt,depthBuffer:!1},i=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tx(r)),this._blurMaterial=nx(r,e,t)}return i}_compileMaterial(e){let t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,n,i){let o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ou),u.toneMapping=wi,u.autoClear=!1;let f=new gt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new Ee(new ln,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Ou),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let b=this._cubeSize;ma(i,w*b,p>2?b:0,b,b),u.setRenderTarget(i),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ds||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ku[(i-r-1)%ku.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ee(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);let p=[],w=0;for(let E=0;E<Zi;++E){let N=E/x,W=Math.exp(-N*N/2);p.push(W),E===0?w+=W:E<m&&(w+=2*W)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[i],P=3*y*(i>b-As?i-b+As:0),A=4*(this._cubeSize-y);ma(t,P,A,3*y,2*y),l.setRenderTarget(t),l.render(h,cl)}};Ha=class extends Ft{constructor(e,t,n,i,r,a,o,l,c,u=Rs){if(u!==Rs&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rs&&(n=ji),n===void 0&&u===Os&&(n=Us),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xd=new Ft,Hu=new Ha(1,1),qd=new Oa,Yd=new cc,$d=new za,Vu=[],Gu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}},fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kx(t.type)}},pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;Ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Zx(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};Jx=37297,jx=0;ga=new R;ov=/^[ \t]*#include +<([\w\d./]+)>/gm;lv=new Map;hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;vv=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xc(e),t.set(e,n)),n}},xc=class{constructor(e){this.id=vv++,this.code=e,this.usedTimes=0}};Tv=0;vc=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yc=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Lv={[Tl]:El,[Al]:Pl,[Rl]:Il,[Ls]:Cl,[El]:Tl,[Pl]:Al,[Il]:Rl,[Cl]:Ls};_c=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},kt=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},kv={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ft,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:Fv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends Ti{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=new bc,m=t.getContextAttributes(),p=null,w=null,b=[],y=[],P=new re,A=null,E=new Ot;E.layers.enable(1),E.viewport=new et;let N=new Ot;N.layers.enable(2),N.viewport=new et;let W=[E,N],v=new _c;v.layers.enable(1),v.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=b[X];return Q===void 0&&(Q=new Mr,b[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=b[X];return Q===void 0&&(Q=new Mr,b[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=b[X];return Q===void 0&&(Q=new Mr,b[X]=Q),Q.getHandSpace()};function B(X){let Q=y.indexOf(X.inputSource);if(Q===-1)return;let _e=b[Q];_e!==void 0&&(_e.update(X.inputSource,X.frame,c||a),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let X=0;X<b.length;X++){let Q=y[X];Q!==null&&(y[X]=null,b[X].disconnect(Q))}S=null,F=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,w=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Kt(f.framebufferWidth,f.framebufferHeight,{format:En,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,_e=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Os:Rs,_e=m.stencil?Us:ji);let Ue={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ue),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Kt(d.textureWidth,d.textureHeight,{format:En,type:oi,depthTexture:new Ha(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(X){for(let Q=0;Q<X.removed.length;Q++){let _e=X.removed[Q],pe=y.indexOf(_e);pe>=0&&(y[pe]=null,b[pe].disconnect(_e))}for(let Q=0;Q<X.added.length;Q++){let _e=X.added[Q],pe=y.indexOf(_e);if(pe===-1){for(let Re=0;Re<b.length;Re++)if(Re>=y.length){y.push(_e),pe=Re;break}else if(y[Re]===null){y[Re]=_e,pe=Re;break}if(pe===-1)break}let Ue=b[pe];Ue&&Ue.connect(_e)}}let z=new R,ne=new R;function G(X,Q,_e){z.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);let pe=z.distanceTo(ne),Ue=Q.projectionMatrix.elements,Re=_e.projectionMatrix.elements,qe=Ue[14]/(Ue[10]-1),ht=Ue[14]/(Ue[10]+1),Ye=(Ue[9]+1)/Ue[5],C=(Ue[9]-1)/Ue[5],un=(Ue[8]-1)/Ue[0],We=(Re[8]+1)/Re[0],Ke=qe*un,Pe=qe*We,_t=pe/(-un+We),De=_t*-un;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(_t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ue[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let T=qe+_t,_=ht+_t,U=Ke-De,Y=Pe+(pe-De),j=Ye*ht/_*T,q=C*ht/_*T;X.projectionMatrix.makePerspective(U,Y,j,q,T,_),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function de(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Q=X.near,_e=X.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),v.near=N.near=E.near=Q,v.far=N.far=E.far=_e,(S!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,F=v.far);let pe=X.parent,Ue=v.cameras;de(v,pe);for(let Re=0;Re<Ue.length;Re++)de(Ue[Re],pe);Ue.length===2?G(v,E,N):v.projectionMatrix.copy(E.projectionMatrix),fe(X,v,pe)};function fe(X,Q,_e){_e===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Bs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Me=null;function Je(X,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){let _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let pe=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,pe=!0);for(let Re=0;Re<_e.length;Re++){let qe=_e[Re],ht=null;if(f!==null)ht=f.getViewport(qe);else{let C=h.getViewSubImage(d,qe);ht=C.viewport,Re===0&&(e.setRenderTargetTextures(w,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(w))}let Ye=W[Re];Ye===void 0&&(Ye=new Ot,Ye.layers.enable(Re),Ye.viewport=new et,W[Re]=Ye),Ye.matrix.fromArray(qe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(qe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ht.x,ht.y,ht.width,ht.height),Re===0&&(v.matrix.copy(Ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pe===!0&&v.cameras.push(Ye)}let Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let Re=h.getDepthInformation(_e[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,i.renderState)}}for(let _e=0;_e<b.length;_e++){let pe=y[_e],Ue=b[_e];pe!==null&&Ue!==void 0&&Ue.update(pe,Q,c||a)}Me&&Me(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let at=new Wd;at.setAnimationLoop(Je),this.setAnimationLoop=function(X){Me=X},this.dispose=function(){}}},qi=new $n,zv=new Ne;Va=class{constructor(e={}){let{canvas:t=qp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=wi,this.toneMappingExposure=1;let b=this,y=!1,P=0,A=0,E=null,N=-1,W=null,v=new et,S=new et,F=null,B=new Z(0),H=0,J=t.width,z=t.height,ne=1,G=null,de=null,fe=new et(0,0,J,z),Me=new et(0,0,J,z),Je=!1,at=new Cr,X=!1,Q=!1,_e=new Ne,pe=new Ne,Ue=new R,Re=new et,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function Ye(){return E===null?ne:1}let C=n;function un(M,L){return t.getContext(M,L)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ue,!1),C===null){let L="webgl2";if(C=un(L,M),C===null)throw un(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let We,Ke,Pe,_t,De,T,_,U,Y,j,q,Se,ae,me,Ze,te,ge,Ie,Le,xe,Xe,Oe,xt,I;function he(){We=new sx(C),We.init(),Oe=new Ov(C,We),Ke=new j0(C,We,e,Oe),Pe=new Dv(C),Ke.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),_t=new ox(C),De=new _v,T=new Uv(C,We,Pe,De,Ke,Oe,_t),_=new ex(b),U=new ix(b),Y=new pm(C),xt=new Z0(C,Y),j=new rx(C,Y,_t,xt),q=new cx(C,j,Y,_t),Le=new lx(C,Ke,T),te=new Q0(De),Se=new yv(b,_,U,We,Ke,xt,te),ae=new Hv(b,De),me=new Mv,Ze=new Rv(We),Ie=new K0(b,_,U,Pe,q,d,l),ge=new Iv(b,q,Ke),I=new Vv(C,_t,Ke,Pe),xe=new J0(C,We,_t),Xe=new ax(C,We,_t),_t.programs=Se.programs,b.capabilities=Ke,b.extensions=We,b.properties=De,b.renderLists=me,b.shadowMap=ge,b.state=Pe,b.info=_t}he();let V=new Mc(b,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(J,z,!1))},this.getSize=function(M){return M.set(J,z)},this.setSize=function(M,L,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,z=L,t.width=Math.floor(M*ne),t.height=Math.floor(L*ne),O===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(J*ne,z*ne).floor()},this.setDrawingBufferSize=function(M,L,O){J=M,z=L,ne=O,t.width=Math.floor(M*O),t.height=Math.floor(L*O),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(fe)},this.setViewport=function(M,L,O,k){M.isVector4?fe.set(M.x,M.y,M.z,M.w):fe.set(M,L,O,k),Pe.viewport(v.copy(fe).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(Me)},this.setScissor=function(M,L,O,k){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,L,O,k),Pe.scissor(S.copy(Me).multiplyScalar(ne).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(M){Pe.setScissorTest(Je=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(M=!0,L=!0,O=!0){let k=0;if(M){let D=!1;if(E!==null){let ie=E.texture.format;D=ie===nh||ie===th||ie===eh}if(D){let ie=E.texture.type,ce=ie===oi||ie===ji||ie===Er||ie===Us||ie===Jc||ie===jc,ye=Ie.getClearColor(),be=Ie.getClearAlpha(),Ae=ye.r,Ce=ye.g,we=ye.b;ce?(f[0]=Ae,f[1]=Ce,f[2]=we,f[3]=be,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=Ae,g[1]=Ce,g[2]=we,g[3]=be,C.clearBufferiv(C.COLOR,0,g))}else k|=C.COLOR_BUFFER_BIT}L&&(k|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),Ze.dispose(),De.dispose(),_.dispose(),U.dispose(),q.dispose(),xt.dispose(),I.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",eu),V.removeEventListener("sessionend",tu),zi.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let M=_t.autoReset,L=ge.enabled,O=ge.autoUpdate,k=ge.needsUpdate,D=ge.type;he(),_t.autoReset=M,ge.enabled=L,ge.autoUpdate=O,ge.needsUpdate=k,ge.type=D}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $e(M){let L=M.target;L.removeEventListener("dispose",$e),Lt(L)}function Lt(M){rn(M),De.remove(M)}function rn(M){let L=De.get(M).programs;L!==void 0&&(L.forEach(function(O){Se.releaseProgram(O)}),M.isShaderMaterial&&Se.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,O,k,D,ie){L===null&&(L=qe);let ce=D.isMesh&&D.matrixWorld.determinant()<0,ye=Wf(M,L,O,k,D);Pe.setMaterial(k,ce);let be=O.index,Ae=1;if(k.wireframe===!0){if(be=j.getWireframeAttribute(O),be===void 0)return;Ae=2}let Ce=O.drawRange,we=O.attributes.position,ot=Ce.start*Ae,bt=(Ce.start+Ce.count)*Ae;ie!==null&&(ot=Math.max(ot,ie.start*Ae),bt=Math.min(bt,(ie.start+ie.count)*Ae)),be!==null?(ot=Math.max(ot,0),bt=Math.min(bt,be.count)):we!=null&&(ot=Math.max(ot,0),bt=Math.min(bt,we.count));let At=bt-ot;if(At<0||At===1/0)return;xt.setup(D,k,ye,O,be);let dn,nt=xe;if(be!==null&&(dn=Y.get(be),nt=Xe,nt.setIndex(dn)),D.isMesh)k.wireframe===!0?(Pe.setLineWidth(k.wireframeLinewidth*Ye()),nt.setMode(C.LINES)):nt.setMode(C.TRIANGLES);else if(D.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*Ye()),D.isLineSegments?nt.setMode(C.LINES):D.isLineLoop?nt.setMode(C.LINE_LOOP):nt.setMode(C.LINE_STRIP)}else D.isPoints?nt.setMode(C.POINTS):D.isSprite&&nt.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)nt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))nt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Te=D._multiDrawStarts,Yt=D._multiDrawCounts,it=D._multiDrawCount,Ln=be?Y.get(be).bytesPerElement:1,hs=De.get(k).currentProgram.getUniforms();for(let fn=0;fn<it;fn++)hs.setValue(C,"_gl_DrawID",fn),nt.render(Te[fn]/Ln,Yt[fn])}else if(D.isInstancedMesh)nt.renderInstances(ot,At,D.count);else if(O.isInstancedBufferGeometry){let Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Yt=Math.min(O.instanceCount,Te);nt.renderInstances(ot,At,Yt)}else nt.render(ot,At)};function je(M,L,O){M.transparent===!0&&M.side===on&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,Zr(M,L,O),M.side=Yn,M.needsUpdate=!0,Zr(M,L,O),M.side=on):Zr(M,L,O)}this.compile=function(M,L,O=null){O===null&&(O=M),m=Ze.get(O),m.init(L),w.push(m),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),M!==O&&M.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();let k=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ie=D.material;if(ie)if(Array.isArray(ie))for(let ce=0;ce<ie.length;ce++){let ye=ie[ce];je(ye,O,D),k.add(ye)}else je(ie,O,D),k.add(ie)}),w.pop(),m=null,k},this.compileAsync=function(M,L,O=null){let k=this.compile(M,L,O);return new Promise(D=>{function ie(){if(k.forEach(function(ce){De.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){D(M);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let an=null;function jn(M){an&&an(M)}function eu(){zi.stop()}function tu(){zi.start()}let zi=new Wd;zi.setAnimationLoop(jn),typeof self!="undefined"&&zi.setContext(self),this.setAnimationLoop=function(M){an=M,V.setAnimationLoop(M),M===null?zi.stop():zi.start()},V.addEventListener("sessionstart",eu),V.addEventListener("sessionend",tu),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,L,E),m=Ze.get(M,w.length),m.init(L),w.push(m),pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),at.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,X=te.init(this.clippingPlanes,Q),x=me.get(M,p.length),x.init(),p.push(x),V.enabled===!0&&V.isPresenting===!0){let ie=b.xr.getDepthSensingMesh();ie!==null&&ko(ie,L,-1/0,b.sortObjects)}ko(M,L,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(G,de),ht=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ht&&Ie.addToRenderList(x,M),this.info.render.frame++,X===!0&&te.beginShadows();let O=m.state.shadowsArray;ge.render(O,M,L),X===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=x.opaque,D=x.transmissive;if(m.setupLights(),L.isArrayCamera){let ie=L.cameras;if(D.length>0)for(let ce=0,ye=ie.length;ce<ye;ce++){let be=ie[ce];iu(k,D,M,be)}ht&&Ie.render(M);for(let ce=0,ye=ie.length;ce<ye;ce++){let be=ie[ce];nu(x,M,be,be.viewport)}}else D.length>0&&iu(k,D,M,L),ht&&Ie.render(M),nu(x,M,L);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(b,M,L),xt.resetDefaultState(),N=-1,W=null,w.pop(),w.length>0?(m=w[w.length-1],X===!0&&te.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function ko(M,L,O,k){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||at.intersectsSprite(M)){k&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pe);let ce=q.update(M),ye=M.material;ye.visible&&x.push(M,ce,ye,O,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||at.intersectsObject(M))){let ce=q.update(M),ye=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Re.copy(ce.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(pe)),Array.isArray(ye)){let be=ce.groups;for(let Ae=0,Ce=be.length;Ae<Ce;Ae++){let we=be[Ae],ot=ye[we.materialIndex];ot&&ot.visible&&x.push(M,ce,ot,O,Re.z,we)}}else ye.visible&&x.push(M,ce,ye,O,Re.z,null)}}let ie=M.children;for(let ce=0,ye=ie.length;ce<ye;ce++)ko(ie[ce],L,O,k)}function nu(M,L,O,k){let D=M.opaque,ie=M.transmissive,ce=M.transparent;m.setupLightsView(O),X===!0&&te.setGlobalState(b.clippingPlanes,O),k&&Pe.viewport(v.copy(k)),D.length>0&&Kr(D,L,O),ie.length>0&&Kr(ie,L,O),ce.length>0&&Kr(ce,L,O),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function iu(M,L,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Kt(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?_n:oi,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));let ie=m.state.transmissionRenderTarget[k.id],ce=k.viewport||v;ie.setSize(ce.z,ce.w);let ye=b.getRenderTarget();b.setRenderTarget(ie),b.getClearColor(B),H=b.getClearAlpha(),H<1&&b.setClearColor(16777215,.5),b.clear(),ht&&Ie.render(O);let be=b.toneMapping;b.toneMapping=wi;let Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),X===!0&&te.setGlobalState(b.clippingPlanes,k),Kr(M,O,k),T.updateMultisampleRenderTarget(ie),T.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let we=0,ot=L.length;we<ot;we++){let bt=L[we],At=bt.object,dn=bt.geometry,nt=bt.material,Te=bt.group;if(nt.side===on&&At.layers.test(k.layers)){let Yt=nt.side;nt.side=Qt,nt.needsUpdate=!0,su(At,O,k,dn,nt,Te),nt.side=Yt,nt.needsUpdate=!0,Ce=!0}}Ce===!0&&(T.updateMultisampleRenderTarget(ie),T.updateRenderTargetMipmap(ie))}b.setRenderTarget(ye),b.setClearColor(B,H),Ae!==void 0&&(k.viewport=Ae),b.toneMapping=be}function Kr(M,L,O){let k=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ie=M.length;D<ie;D++){let ce=M[D],ye=ce.object,be=ce.geometry,Ae=k===null?ce.material:k,Ce=ce.group;ye.layers.test(O.layers)&&su(ye,L,O,be,Ae,Ce)}}function su(M,L,O,k,D,ie){M.onBeforeRender(b,L,O,k,D,ie),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(b,L,O,k,M,ie),D.transparent===!0&&D.side===on&&D.forceSinglePass===!1?(D.side=Qt,D.needsUpdate=!0,b.renderBufferDirect(O,L,k,D,M,ie),D.side=Yn,D.needsUpdate=!0,b.renderBufferDirect(O,L,k,D,M,ie),D.side=on):b.renderBufferDirect(O,L,k,D,M,ie),M.onAfterRender(b,L,O,k,D,ie)}function Zr(M,L,O){L.isScene!==!0&&(L=qe);let k=De.get(M),D=m.state.lights,ie=m.state.shadowsArray,ce=D.state.version,ye=Se.getParameters(M,D.state,ie,L,O),be=Se.getProgramCacheKey(ye),Ae=k.programs;k.environment=M.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(M.isMeshStandardMaterial?U:_).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",$e),Ae=new Map,k.programs=Ae);let Ce=Ae.get(be);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===ce)return au(M,ye),Ce}else ye.uniforms=Se.getUniforms(M),M.onBeforeCompile(ye,b),Ce=Se.acquireProgram(ye,be),Ae.set(be,Ce),k.uniforms=ye.uniforms;let we=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=te.uniform),au(M,ye),k.needsLights=qf(M),k.lightsStateVersion=ce,k.needsLights&&(we.ambientLightColor.value=D.state.ambient,we.lightProbe.value=D.state.probe,we.directionalLights.value=D.state.directional,we.directionalLightShadows.value=D.state.directionalShadow,we.spotLights.value=D.state.spot,we.spotLightShadows.value=D.state.spotShadow,we.rectAreaLights.value=D.state.rectArea,we.ltc_1.value=D.state.rectAreaLTC1,we.ltc_2.value=D.state.rectAreaLTC2,we.pointLights.value=D.state.point,we.pointLightShadows.value=D.state.pointShadow,we.hemisphereLights.value=D.state.hemi,we.directionalShadowMap.value=D.state.directionalShadowMap,we.directionalShadowMatrix.value=D.state.directionalShadowMatrix,we.spotShadowMap.value=D.state.spotShadowMap,we.spotLightMatrix.value=D.state.spotLightMatrix,we.spotLightMap.value=D.state.spotLightMap,we.pointShadowMap.value=D.state.pointShadowMap,we.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function ru(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Ps.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function au(M,L){let O=De.get(M);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Wf(M,L,O,k,D){L.isScene!==!0&&(L=qe),T.resetTextureUnits();let ie=L.fog,ce=k.isMeshStandardMaterial?L.environment:null,ye=E===null?b.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Nt,be=(k.isMeshStandardMaterial?U:_).get(k.envMap||ce),Ae=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!O.morphAttributes.position,ot=!!O.morphAttributes.normal,bt=!!O.morphAttributes.color,At=wi;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(At=b.toneMapping);let dn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=dn!==void 0?dn.length:0,Te=De.get(k),Yt=m.state.lights;if(X===!0&&(Q===!0||M!==W)){let wn=M===W&&k.id===N;te.setState(k,M,wn)}let it=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Yt.state.version||Te.outputColorSpace!==ye||D.isBatchedMesh&&Te.batching===!1||!D.isBatchedMesh&&Te.batching===!0||D.isBatchedMesh&&Te.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Te.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Te.instancing===!1||!D.isInstancedMesh&&Te.instancing===!0||D.isSkinnedMesh&&Te.skinning===!1||!D.isSkinnedMesh&&Te.skinning===!0||D.isInstancedMesh&&Te.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Te.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Te.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Te.instancingMorph===!1&&D.morphTexture!==null||Te.envMap!==be||k.fog===!0&&Te.fog!==ie||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==Ce||Te.morphTargets!==we||Te.morphNormals!==ot||Te.morphColors!==bt||Te.toneMapping!==At||Te.morphTargetsCount!==nt)&&(it=!0):(it=!0,Te.__version=k.version);let Ln=Te.currentProgram;it===!0&&(Ln=Zr(k,L,D));let hs=!1,fn=!1,Fo=!1,It=Ln.getUniforms(),mi=Te.uniforms;if(Pe.useProgram(Ln.program)&&(hs=!0,fn=!0,Fo=!0),k.id!==N&&(N=k.id,fn=!0),hs||W!==M){Ke.reverseDepthBuffer?(_e.copy(M.projectionMatrix),$p(_e),Kp(_e),It.setValue(C,"projectionMatrix",_e)):It.setValue(C,"projectionMatrix",M.projectionMatrix),It.setValue(C,"viewMatrix",M.matrixWorldInverse);let wn=It.map.cameraPosition;wn!==void 0&&wn.setValue(C,Ue.setFromMatrixPosition(M.matrixWorld)),Ke.logarithmicDepthBuffer&&It.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&It.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,fn=!0,Fo=!0)}if(D.isSkinnedMesh){It.setOptional(C,D,"bindMatrix"),It.setOptional(C,D,"bindMatrixInverse");let wn=D.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),It.setValue(C,"boneTexture",wn.boneTexture,T))}D.isBatchedMesh&&(It.setOptional(C,D,"batchingTexture"),It.setValue(C,"batchingTexture",D._matricesTexture,T),It.setOptional(C,D,"batchingIdTexture"),It.setValue(C,"batchingIdTexture",D._indirectTexture,T),It.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&It.setValue(C,"batchingColorTexture",D._colorsTexture,T));let Bo=O.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0)&&Le.update(D,O,Ln),(fn||Te.receiveShadow!==D.receiveShadow)&&(Te.receiveShadow=D.receiveShadow,It.setValue(C,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(mi.envMap.value=be,mi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(mi.envMapIntensity.value=L.environmentIntensity),fn&&(It.setValue(C,"toneMappingExposure",b.toneMappingExposure),Te.needsLights&&Xf(mi,Fo),ie&&k.fog===!0&&ae.refreshFogUniforms(mi,ie),ae.refreshMaterialUniforms(mi,k,ne,z,m.state.transmissionRenderTarget[M.id]),Ps.upload(C,ru(Te),mi,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ps.upload(C,ru(Te),mi,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&It.setValue(C,"center",D.center),It.setValue(C,"modelViewMatrix",D.modelViewMatrix),It.setValue(C,"normalMatrix",D.normalMatrix),It.setValue(C,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let wn=k.uniformsGroups;for(let zo=0,Yf=wn.length;zo<Yf;zo++){let ou=wn[zo];I.update(ou,Ln),I.bind(ou,Ln)}}return Ln}function Xf(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function qf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,L,O){De.get(M.texture).__webglTexture=L,De.get(M.depthTexture).__webglTexture=O;let k=De.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){let O=De.get(M);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,O=0){E=M,P=L,A=O;let k=!0,D=null,ie=!1,ce=!1;if(M){let be=De.get(M);if(be.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(be.__hasExternalTextures)T.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let we=M.depthTexture;if(be.__boundDepthTexture!==we){if(we!==null&&De.has(we)&&(M.width!==we.image.width||M.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}let Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);let Ce=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?D=Ce[L][O]:D=Ce[L],ie=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?D=De.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?D=Ce[O]:D=Ce,v.copy(M.viewport),S.copy(M.scissor),F=M.scissorTest}else v.copy(fe).multiplyScalar(ne).floor(),S.copy(Me).multiplyScalar(ne).floor(),F=Je;if(Pe.bindFramebuffer(C.FRAMEBUFFER,D)&&k&&Pe.drawBuffers(M,D),Pe.viewport(v),Pe.scissor(S),Pe.setScissorTest(F),ie){let be=De.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,O)}else if(ce){let be=De.get(M.texture),Ae=L||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.__webglTexture,O||0,Ae)}N=-1},this.readRenderTargetPixels=function(M,L,O,k,D,ie,ce){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ce!==void 0&&(ye=ye[ce]),ye){Pe.bindFramebuffer(C.FRAMEBUFFER,ye);try{let be=M.texture,Ae=be.format,Ce=be.type;if(!Ke.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-k&&O>=0&&O<=M.height-D&&C.readPixels(L,O,k,D,Oe.convert(Ae),Oe.convert(Ce),ie)}finally{let be=E!==null?De.get(E).__webglFramebuffer:null;Pe.bindFramebuffer(C.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(M,L,O,k,D,ie,ce){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ce!==void 0&&(ye=ye[ce]),ye){let be=M.texture,Ae=be.format,Ce=be.type;if(!Ke.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-k&&O>=0&&O<=M.height-D){Pe.bindFramebuffer(C.FRAMEBUFFER,ye);let we=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.bufferData(C.PIXEL_PACK_BUFFER,ie.byteLength,C.STREAM_READ),C.readPixels(L,O,k,D,Oe.convert(Ae),Oe.convert(Ce),0);let ot=E!==null?De.get(E).__webglFramebuffer:null;Pe.bindFramebuffer(C.FRAMEBUFFER,ot);let bt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Yp(C,bt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ie),C.deleteBuffer(we),C.deleteSync(bt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,O=0){M.isTexture!==!0&&(Pa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);let k=Math.pow(2,-O),D=Math.floor(M.image.width*k),ie=Math.floor(M.image.height*k),ce=L!==null?L.x:0,ye=L!==null?L.y:0;T.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,ce,ye,D,ie),Pe.unbindTexture()},this.copyTextureToTexture=function(M,L,O=null,k=null,D=0){M.isTexture!==!0&&(Pa("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],L=arguments[2],D=arguments[3]||0,O=null);let ie,ce,ye,be,Ae,Ce;O!==null?(ie=O.max.x-O.min.x,ce=O.max.y-O.min.y,ye=O.min.x,be=O.min.y):(ie=M.image.width,ce=M.image.height,ye=0,be=0),k!==null?(Ae=k.x,Ce=k.y):(Ae=0,Ce=0);let we=Oe.convert(L.format),ot=Oe.convert(L.type);T.setTexture2D(L,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let bt=C.getParameter(C.UNPACK_ROW_LENGTH),At=C.getParameter(C.UNPACK_IMAGE_HEIGHT),dn=C.getParameter(C.UNPACK_SKIP_PIXELS),nt=C.getParameter(C.UNPACK_SKIP_ROWS),Te=C.getParameter(C.UNPACK_SKIP_IMAGES),Yt=M.isCompressedTexture?M.mipmaps[D]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Yt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Yt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,be),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,Ae,Ce,ie,ce,we,ot,Yt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,Ae,Ce,Yt.width,Yt.height,we,Yt.data):C.texSubImage2D(C.TEXTURE_2D,D,Ae,Ce,ie,ce,we,ot,Yt),C.pixelStorei(C.UNPACK_ROW_LENGTH,bt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At),C.pixelStorei(C.UNPACK_SKIP_PIXELS,dn),C.pixelStorei(C.UNPACK_SKIP_ROWS,nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Te),D===0&&L.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(M,L,O=null,k=null,D=0){M.isTexture!==!0&&(Pa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,M=arguments[2],L=arguments[3],D=arguments[4]||0);let ie,ce,ye,be,Ae,Ce,we,ot,bt,At=M.isCompressedTexture?M.mipmaps[D]:M.image;O!==null?(ie=O.max.x-O.min.x,ce=O.max.y-O.min.y,ye=O.max.z-O.min.z,be=O.min.x,Ae=O.min.y,Ce=O.min.z):(ie=At.width,ce=At.height,ye=At.depth,be=0,Ae=0,Ce=0),k!==null?(we=k.x,ot=k.y,bt=k.z):(we=0,ot=0,bt=0);let dn=Oe.convert(L.format),nt=Oe.convert(L.type),Te;if(L.isData3DTexture)T.setTexture3D(L,0),Te=C.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)T.setTexture2DArray(L,0),Te=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let Yt=C.getParameter(C.UNPACK_ROW_LENGTH),it=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ln=C.getParameter(C.UNPACK_SKIP_PIXELS),hs=C.getParameter(C.UNPACK_SKIP_ROWS),fn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,be),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ae),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Te,D,we,ot,bt,ie,ce,ye,dn,nt,At.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(Te,D,we,ot,bt,ie,ce,ye,dn,At.data):C.texSubImage3D(Te,D,we,ot,bt,ie,ce,ye,dn,nt,At),C.pixelStorei(C.UNPACK_ROW_LENGTH,Yt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,it),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,hs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,fn),D===0&&L.generateMipmaps&&C.generateMipmap(Te),Pe.unbindTexture()},this.initRenderTarget=function(M){De.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Pe.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,Pe.reset(),xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ih?"display-p3":"srgb",t.unpackColorSpace=ze.workingColorSpace===uo?"display-p3":"srgb"}},Ga=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Z(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pr=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new R,Lr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sd=new R,rd=new et,ad=new et,Gv=new R,od=new Ne,xa=new R,ml=new xn,ld=new Ne,gl=new Qi,Wa=class extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingBox.expandByPoint(xa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingSphere.expandByPoint(xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(i),e.ray.intersectsSphere(ml)!==!1&&(ld.copy(i).invert(),gl.copy(e.ray).applyMatrix4(ld),!(this.boundingBox!==null&&gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;rd.fromBufferAttribute(i.attributes.skinIndex,e),ad.fromBufferAttribute(i.attributes.skinWeight,e),sd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=ad.getComponent(r);if(a!==0){let o=rd.getComponent(r);od.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Gv.copy(sd).applyMatrix4(od),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Dr=class extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xa=class extends Ft{constructor(e=null,t=1,n=1,i,r,a,o,l,c=jt,u=jt,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cd=new Ne,Wv=new Ne,qa=class s{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Wv;cd.multiplyMatrices(o,t[r]),cd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Xa(t,e,e,En,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Dr),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},es=class extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new Ne,hd=new Ne,va=[],ud=new Wt,Xv=new Ne,pr=new Ee,mr=new xn,Gs=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),ud.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),mr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ts),hd.multiplyMatrices(n,Ts),pr.matrixWorld=hd,pr.raycast(e,va);for(let a=0,o=va.length;a<o;a++){let l=va[a];l.instanceId=r,l.object=this,t.push(l)}va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xa(new Float32Array(i*this.count),i,this.count,Qc,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Nr=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Z(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ya=new R,$a=new R,dd=new Ne,gr=new Qi,ya=new xn,xl=new R,fd=new R,Ws=class extends Mt{constructor(e=new Rt,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ya.fromBufferAttribute(t,i-1),$a.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ya.distanceTo($a);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;dd.copy(i).invert(),gr.copy(e.ray).applyMatrix4(dd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),w=u.getX(x+1),b=_a(this,e,gr,l,p,w);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=_a(this,e,gr,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=_a(this,e,gr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=_a(this,e,gr,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};pd=new R,md=new R,Ka=class extends Ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pd.fromBufferAttribute(t,i),md.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pd.distanceTo(md);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Za=class extends Ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ur=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gd=new Ne,Sc=new Qi,ba=new xn,Ma=new R,Xs=class extends Mt{constructor(e=new Rt,t=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;gd.copy(i).invert(),Sc.copy(e.ray).applyMatrix4(gd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Ma.fromBufferAttribute(h,m),xd(Ma,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Ma.fromBufferAttribute(h,g),xd(Ma,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,i=[],r=[],a=[],o=new R,l=new Ne;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Gt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Gt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ja=class extends Hn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wc=class extends Ja{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Sa=new R,vl=new ah,yl=new ah,_l=new ah,ts=class extends Hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Sa.subVectors(i[0],i[1]).add(i[0]),c=Sa);let h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Sa.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),vl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),yl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),_l.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),yl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),_l.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(vl.calc(l),yl.calc(l),_l.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Tc=class extends Hn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,i.x,r.x,a.x,o.x),wr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ec=class extends Hn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,i.x,r.x,a.x,o.x),wr(e,i.y,r.y,a.y,o.y),wr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ac=class extends Hn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends Hn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cc=class extends Hn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(e,i.x,r.x,a.x),Sr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Hn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(e,i.x,r.x,a.x),Sr(e,i.y,r.y,a.y),Sr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(vd(o,l.x,c.x,u.x,h.x),vd(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},Qv=Object.freeze({__proto__:null,ArcCurve:wc,CatmullRomCurve3:ts,CubicBezierCurve:Tc,CubicBezierCurve3:Ec,EllipseCurve:Ja,LineCurve:Ac,LineCurve3:Rc,QuadraticBezierCurve:Cc,QuadraticBezierCurve3:ja,SplineCurve:Pc}),An=class s extends Rt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function w(){let y=new R,P=new R,A=0,E=(t-e)/n;for(let N=0;N<=r;N++){let W=[],v=N/r,S=v*(t-e)+e;for(let F=0;F<=i;F++){let B=F/i,H=B*l+o,J=Math.sin(H),z=Math.cos(H);P.x=S*J,P.y=-v*n+m,P.z=S*z,h.push(P.x,P.y,P.z),y.set(J,E,z).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-v),W.push(g++)}x.push(W)}for(let N=0;N<i;N++)for(let W=0;W<r;W++){let v=x[W][N],S=x[W+1][N],F=x[W+1][N+1],B=x[W][N+1];e>0&&(u.push(v,S,B),A+=3),t>0&&(u.push(S,F,B),A+=3)}c.addGroup(p,A,0),p+=A}function b(y){let P=g,A=new re,E=new R,N=0,W=y===!0?e:t,v=y===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let S=g;for(let F=0;F<=i;F++){let H=F/i*l+o,J=Math.cos(H),z=Math.sin(H);E.x=W*z,E.y=m*v,E.z=W*J,h.push(E.x,E.y,E.z),d.push(0,v,0),A.x=J*.5+.5,A.y=z*.5*v+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){let B=P+F,H=S+F;y===!0?u.push(H,H+1,B):u.push(H+1,H,B),N+=3}c.addGroup(p,N,y===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class s extends Rt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new R,g=new re;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let w=p+m,b=w,y=w+n+1,P=w+n+2,A=w+1;o.push(b,y,A),o.push(y,P,A)}}this.setIndex(o),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},en=class s extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let w=[],b=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){let A=P/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(i+A*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-b),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let b=u[p][w+1],y=u[p][w],P=u[p+1][w],A=u[p+1][w+1];(p!==0||a>0)&&f.push(b,y,A),(p!==n-1||l<Math.PI)&&f.push(y,P,A)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Qa=class s extends Rt{constructor(e=new ja(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new re,u=new R,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),w(),p()}function m(b){u=e.getPointAt(b/t,u);let y=a.normals[b],P=a.binormals[b];for(let A=0;A<=i;A++){let E=A/i*Math.PI*2,N=Math.sin(E),W=-Math.cos(E);l.x=W*y.x+N*P.x,l.y=W*y.y+N*P.y,l.z=W*y.z+N*P.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let y=1;y<=i;y++){let P=(i+1)*(b-1)+(y-1),A=(i+1)*b+(y-1),E=(i+1)*b+y,N=(i+1)*(b-1)+y;g.push(P,A,N),g.push(A,E,N)}}function w(){for(let b=0;b<=t;b++)for(let y=0;y<=i;y++)c.x=b/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Qv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},eo=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Z(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Z(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Z(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Ai=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ic=class extends Ai{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fu:r=e,o=2*t-n;break;case pu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fu:a=e,l=2*n-t;break;case pu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let P=0;P!==o;++P)r[P]=p*a[u+P]+w*a[c+P]+b*a[l+P]+y*a[h+P];return r}},Lc=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Dc=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ey(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Fs;Ri=class extends Rn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=ks;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;to=class extends Rn{};to.prototype.ValueTypeName="color";li=class extends Rn{};li.prototype.ValueTypeName="number";Nc=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ci=class extends Rn{InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}};ci.prototype.ValueTypeName="quaternion";ci.prototype.InterpolantFactoryMethodSmooth=void 0;Ci=class extends Rn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ks;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;hi=class extends Rn{};hi.prototype.ValueTypeName="vector";no=class{constructor(e="",t=-1,n=[],i=yp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(iy(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=ty(l);l=yd(l,1,u),c=yd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new li(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];Kd(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let w=0;w!==d[g].morphTargets.length;++w){let b=d[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}i.push(new li(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+t[h].name+"]";n(hi,f+".position",d,"pos",i),n(ci,f+".quaternion",d,"rot",i),n(hi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Uc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},sy=new Uc,Vn=class{constructor(e){this.manager=e!==void 0?e:sy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";si={},Oc=class extends Error{constructor(e,t){super(e),this.response=t}},Pi=class extends Vn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:i});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=si[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){w();function w(){h.read().then(({done:b,value:y})=>{if(b)p.close();else{x+=y.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,E=u.length;A<E;A++){let N=u[A];N.onProgress&&N.onProgress(P)}p.enqueue(y),w()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Oc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Mi.add(e,c);let u=si[e];delete si[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=si[e];if(u===void 0)throw this.manager.itemError(e),c;delete si[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},kc=class extends Vn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Mi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ar("img");function l(){u(),Mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},io=class extends Vn{constructor(e){super(e)}load(e,t,n,i){let r=new Ft,a=new kc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},qs=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Z(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},so=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bl=new Ne,_d=new R,bd=new R,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fc=class extends kr{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ro=class extends qs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Md=new Ne,xr=new R,Ml=new R,Bc=class extends kr{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(xr),Ml.copy(n.position),Ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ml),n.updateMatrixWorld(),i.makeTranslation(-xr.x,-xr.y,-xr.z),Md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md)}},ao=class extends qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zc=class extends kr{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new zc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ii=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},oo=class extends Vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Mi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Mi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Mi.add(e,l),r.manager.itemStart(e)}},lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};oh="\\[\\]\\.:\\/",ry=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",ay="[^"+oh.replace("\\.","")+"]",oy=/((?:WC+[\/:])*)/.source.replace("WC",lh),ly=/(WCOD+)?/.source.replace("WCOD",ay),cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),uy=new RegExp("^"+oy+ly+cy+hy+"$"),dy=["material","materials","bones","map"],Hc=class{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ry,"")}static parseTrackName(e){let t=uy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);dy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Hc;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];qy=new Float32Array(1),wd=new Ne,Ys=class{constructor(e,t,n=0,i=1/0){this.ray=new Qi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(e,t=!0,n=[]){return Vc(e,this,n,t),n.sort(Td),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Vc(e[i],this,n,t);return n.sort(Td),n}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169")});function hh(s){let e=new yt({uniforms:{sunDir:{value:Hr},time:s.time},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }",fragmentShader:ch+`varying vec3 vD; void main(){ gl_FragColor = vec4(skyCol(normalize(vD), true), 1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,side:Qt,depthWrite:!1,fog:!1}),t=new Ee(new en(500,32,16),e);return t.frustumCulled=!1,t.renderOrder=-10,t}var Hr,ch,uh=Qe(()=>{wt();Hr=new R(-.8,.36,-.3).normalize(),ch=`
uniform vec3 sunDir; uniform float time;
float sh21(vec2 p){ vec3 q = fract(vec3(p.xyx) * .1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float svn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(sh21(i), sh21(i + vec2(1., 0.)), f.x), mix(sh21(i + vec2(0., 1.)), sh21(i + 1.), f.x), f.y); }
float sfbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 4; i++) { s += a * svn(p); p = p * 2.03 + 7.1; a *= .5; } return s; }
vec3 skyCol(vec3 d, bool clouds){
  float y = max(d.y, -.05);
  float sd = max(dot(d, sunDir), 0.);
  vec3 zen = vec3(.20, .42, .78), mid = vec3(.55, .66, .86), hor = vec3(1., .72, .48), low = vec3(1., .58, .42);
  vec3 c = mix(hor, mid, smoothstep(.0, .22, y)); c = mix(c, zen, smoothstep(.2, .75, y)); c = mix(low, c, smoothstep(-.05, .06, y));
  // warm the half of the sky near the sun
  c = mix(c, vec3(1., .66, .38), pow(sd, 3.) * .55 * (1. - smoothstep(0., .5, y)));
  c += vec3(1., .62, .3) * pow(sd, 18.) * .7 + vec3(1., .85, .6) * pow(sd, 300.) * 1.5;
  c += vec3(1., .97, .85) * smoothstep(.9985, .9992, sd) * 6.;
  if (clouds) {
    vec2 uv = d.xz / (y + .12) * 1.1 + vec2(time * .006, time * .002);
    float n = sfbm(uv * 1.3); float m = smoothstep(.52, .78, n) * smoothstep(.0, .08, y) * (1. - smoothstep(.45, .8, y));
    float lit = clamp(sfbm(uv * 1.3 + sunDir.xz * .08) - n + .55, 0., 1.);
    vec3 cc = mix(vec3(.82, .55, .55), vec3(1., .86, .7), lit) + vec3(1., .6, .3) * pow(sd, 6.) * .6;
    c = mix(c, cc, m * .85);
  }
  return c;
}`});var cn,po,Ks,ut,dh,Zs=Qe(()=>{cn=new URLSearchParams(location.search),po="piratecovetycoon_save_v1",Ks={data:null,defaults(){return{v:1,gold:0,pearls:0,stars:0,life:0,total:0,b:{},bridge:!1,crew:{},q:0,qn:0,mis:{day:"",list:[],bonus:!1},streak:{n:0,last:"",claimed:""},rum:0,wins:0,raidAt:0,fleet:0,bounty:0,ev:{},last:0,legends:0,music:.6,sfx:.9,mult:1,st:{taps:0,ships:0,pulls:0,upg:0,raids:0,bottles:0},seen:{}}},store(){return ut.ready&&ut.sdk.data?ut.sdk.data:window.localStorage},load(){let s=null;try{s=JSON.parse(this.store().getItem(po))}catch{s=null}if(!s)try{s=JSON.parse(window.localStorage.getItem(po))}catch{s=null}let e=this.defaults();return this.data=Object.assign(e,s||{}),["b","crew","mis","streak","st","seen"].forEach(t=>{this.data[t]=Object.assign(e[t],s&&s[t]||{})}),cn.get("fresh")==="1"&&(this.data=this.defaults()),cn.get("rich")==="1"&&(this.data.gold=Math.max(this.data.gold,1e13),this.data.pearls=Math.max(this.data.pearls,500),this.data.q=Math.max(this.data.q,7)),this.data},save(){let s=JSON.stringify(this.data);try{this.store().setItem(po,s)}catch{}try{this.store()!==window.localStorage&&window.localStorage.setItem(po,s)}catch{}}},ut={sdk:null,ready:!1,env:"none",playing:!1,adActive:!1,muted:!1,adBusy:!1,onPause:null,onResume:null,onMute:null,async init(){try{let s=window.CrazyGames&&window.CrazyGames.SDK;if(!s||(await Promise.race([s.init(),new Promise((e,t)=>setTimeout(()=>t(new Error("sdk timeout")),4e3))]),this.env=s.environment,this.env==="disabled"))return;this.sdk=s,this.ready=!0;try{this.muted=!!(s.game.settings&&s.game.settings.muteAudio),s.game.addSettingsChangeListener(e=>{this.muted=!!e.muteAudio,this.onMute&&this.onMute()})}catch{}}catch{this.sdk=null,this.ready=!1}},call(s){if(this.ready)try{s(this.sdk)}catch{}},loadingStart(){this.call(s=>s.game.loadingStart())},loadingStop(){this.call(s=>s.game.loadingStop())},gameplayStart(){this.playing||this.adActive||(this.playing=!0,this.call(s=>s.game.gameplayStart()))},gameplayStop(){this.playing&&(this.playing=!1,this.call(s=>s.game.gameplayStop()))},happytime(){this.call(s=>s.game.happytime())},ad(s,e){if(this.adBusy)return;let t=!1,n=!1;this.adBusy=!0;let i=()=>{this.adActive&&(this.adActive=!1,this.onResume&&this.onResume(),n&&this.gameplayStart())},r=a=>{i(),!t&&(t=!0,this.adBusy=!1,e(a))};if(!this.ready)return r(s==="rewarded");try{this.sdk.ad.requestAd(s,{adStarted:()=>{this.adActive||(n=this.playing,this.gameplayStop(),this.adActive=!0,this.onPause&&this.onPause())},adFinished:()=>r(!0),adError:()=>r(!1)})}catch{r(!1)}}},dh=()=>{let s=new Date;return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()}});var Kn,mo,Zd=Qe(()=>{wt();uh();Zs();Kn={time:{value:0},boost:{value:0}},mo=class{constructor(){let e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<900;this.mobile=e,this.q=cn.has("q")?+cn.get("q"):e?1:2;let t=this.R=new Va({antialias:this.q<1,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,this.q>=2?2:1.5)),t.toneMapping=Fr,t.toneMappingExposure=1,t.outputColorSpace=St,t.shadowMap.enabled=!0,t.shadowMap.type=Gc,document.getElementById("game").appendChild(t.domElement);let n=this.scene=new Pr;n.fog=new Ga(15910816,110,330),this.cam=new Ot(38,1,.5,1200),this.sky=hh(Kn),n.add(this.sky);let i=new Pr;i.add(hh(Kn));let r=new Vs(t);n.environment=r.fromScene(i,0,.1,1e3).texture,n.environmentIntensity=.55;let a=this.sun=new ns(16766632,2.9);a.position.copy(Hr).multiplyScalar(90),a.castShadow=!0;let o=this.q>=2?2048:1024;a.shadow.mapSize.set(o,o);let l=a.shadow.camera;l.left=-62,l.right=62,l.top=46,l.bottom=-46,l.near=20,l.far=220,a.shadow.bias=-6e-4,a.shadow.normalBias=.04,a.shadow.radius=3,a.target.position.set(6,0,-6),n.add(a,a.target),n.add(new so(11061503,14196848,1.05));let c=new ns(10467583,.45);c.position.set(60,40,50),n.add(c),this.target=new R(5,0,-4),this.goal=this.target.clone(),this.dist=62,this.goalDist=62,this.yaw=0,this.pitch=.86,this.vel=new re,this.bounds={x0:-26,x1:46,z0:-32,z1:16},this.minD=22,this.maxD=92,this.ray=new Ys,this.onTap=null,this.drift=0,this.input(),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let e=window.innerWidth,t=window.innerHeight;this.R.setSize(e,t),this.cam.aspect=e/t,this.cam.fov=e<t?52:38,this.cam.updateProjectionMatrix(),this.portrait=e<t,this.fitD=this.portrait?92:64,this.maxD=this.portrait?118:92,this.post&&this.post.resize(e,t)}input(){let e=this.R.domElement,t=new Map,n=null,i=0,r=0,a=0;e.style.touchAction="none";let o=(c,u)=>{if(this.lock)return;let h=this.dist*.0016*(this.portrait?1.25:1);this.goal.x-=c*h,this.goal.z-=u*h*1.25,this.clamp()};e.addEventListener("pointerdown",c=>{if(e.setPointerCapture&&e.setPointerCapture(c.pointerId),t.set(c.pointerId,{x:c.clientX,y:c.clientY}),t.size===1&&(n={x:c.clientX,y:c.clientY,t:performance.now()},r=0,this.vel.set(0,0)),t.size===2){let[u,h]=[...t.values()];i=Math.hypot(u.x-h.x,u.y-h.y),r=99}this.idle=0}),e.addEventListener("pointermove",c=>{if(!t.has(c.pointerId))return;let u=t.get(c.pointerId),h=c.clientX-u.x,d=c.clientY-u.y;if(u.x=c.clientX,u.y=c.clientY,t.size===1){if(r+=Math.abs(h)+Math.abs(d),r>8){o(h,d);let f=performance.now(),g=Math.max(8,f-a);a=f,this.vel.set(h/g*16,d/g*16)}}else if(t.size===2){let[f,g]=[...t.values()],x=Math.hypot(f.x-g.x,f.y-g.y);i>0&&(this.goalDist=is.clamp(this.goalDist*i/x,this.minD,this.maxD)),i=x}this.idle=0});let l=c=>{if(t.has(c.pointerId)){if(t.delete(c.pointerId),t.size===0&&n){let u=performance.now()-n.t;r<10&&u<450?this.tap(c.clientX,c.clientY):performance.now()-a>80&&this.vel.set(0,0),n=null}t.size<2&&(i=0)}};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l),e.addEventListener("wheel",c=>{c.preventDefault(),!this.lock&&(this.goalDist=is.clamp(this.goalDist*(1+Math.sign(c.deltaY)*.12),this.minD,this.maxD))},{passive:!1}),this.panBy=o}clamp(){let e=this.bounds;this.goal.x=is.clamp(this.goal.x,e.x0,e.x1),this.goal.z=is.clamp(this.goal.z,e.z0,e.z1)}tap(e,t){let n=new re(e/window.innerWidth*2-1,-t/window.innerHeight*2+1);this.ray.setFromCamera(n,this.cam),this.onTap&&this.onTap(this.ray,e,t)}focus(e,t){this.goal.set(e.x,0,e.z+(this.portrait?2:3)),this.lock||this.clamp(),t&&(this.goalDist=t),this.vel.set(0,0)}update(e){this.vel.lengthSq()>.01&&(this.panBy(this.vel.x,this.vel.y),this.vel.multiplyScalar(Math.pow(.004,e)));let t=1-Math.pow(5e-4,e);this.target.lerp(this.goal,t),this.dist+=(this.goalDist-this.dist)*t;let n=Kn.time.value,i=Math.sin(n*.13)*.025,r=this.yaw+i,a=this.pitch-(this.dist-40)*.0018,o=this.cam;if(o.position.set(this.target.x+Math.sin(r)*Math.cos(a)*this.dist,this.target.y+Math.sin(a)*this.dist,this.target.z+Math.cos(r)*Math.cos(a)*this.dist),this.shakeT>0){this.shakeT-=e;let l=this.shakeA*Math.max(0,this.shakeT)*4;o.position.x+=(Math.random()-.5)*l,o.position.y+=(Math.random()-.5)*l}o.lookAt(this.target)}shake(e=.5,t=.3){this.shakeA=e,this.shakeT=t}render(){this.post&&this.post.enabled?this.post.render():this.R.render(this.scene,this.cam)}}});function Jd(s,e,t){let n=t>=2?220:150,i=new Hs(520,520,n,n);i.rotateX(-Math.PI/2);let r=i.attributes.position;for(let l=0;l<r.count;l++){let c=r.getX(l),u=r.getZ(l),h=Math.hypot(c,u)/260;if(h<1e-4)continue;let d=Math.pow(h,1.8)/h;r.setX(l,c*d+4),r.setZ(l,u*d-6)}i.computeBoundingSphere();let a=new yt({uniforms:{time:s.time,sunDir:{value:Hr},hmap:{value:e},fogC:{value:new Z},fogN:{value:90},fogF:{value:300},boost:s.boost||{value:0}},vertexShader:`
      uniform float time; uniform sampler2D hmap; varying vec3 vW; varying float vDepth; varying vec3 vN; varying float vCrest;
      float th(vec2 w){ vec2 uv = vec2((w.x - (${Mn.X0.toFixed(1)})) / ${Mn.SZ.toFixed(1)}, (-w.y - (${Mn.Y0.toFixed(1)})) / ${Mn.SZ.toFixed(1)});
        if (uv.x < 0. || uv.y < 0. || uv.x > 1. || uv.y > 1.) return -8.; return texture2D(hmap, uv).r * 16. - 6.; }
      vec3 gerst(vec2 p, vec2 dir, float A, float L, float sp, inout vec3 tb, inout vec3 bt){
        float k = 6.2832 / L, f = k * (dot(dir, p) - sp * time); float Q = .55;
        tb += vec3(-dir.x * dir.x * Q * A * k * sin(f), dir.x * A * k * cos(f), -dir.x * dir.y * Q * A * k * sin(f));
        bt += vec3(-dir.x * dir.y * Q * A * k * sin(f), dir.y * A * k * cos(f), -dir.y * dir.y * Q * A * k * sin(f));
        return vec3(dir.x * Q * A * cos(f), A * sin(f), dir.y * Q * A * cos(f)); }
      void main(){
        vec3 w = (modelMatrix * vec4(position, 1.)).xyz; float hz = th(w.xz); float depth = -hz;
        float damp = smoothstep(-.2, 3.5, depth) * .85 + .15;
        vec3 tb = vec3(1., 0., 0.), bt = vec3(0., 0., 1.), o = vec3(0.);
        o += gerst(w.xz, normalize(vec2(.8, .6)), .20 * damp, 19., 2.1, tb, bt);
        o += gerst(w.xz, normalize(vec2(-.4, .9)), .12 * damp, 11., 1.6, tb, bt);
        o += gerst(w.xz, normalize(vec2(.3, -.95)), .07 * damp, 6.5, 1.2, tb, bt);
        o += gerst(w.xz, normalize(vec2(-.9, -.2)), .04 * damp, 3.7, .9, tb, bt);
        w += o; vCrest = o.y; vN = normalize(cross(bt, tb)); vW = w; vDepth = depth;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.); }`,fragmentShader:ch+`
      uniform sampler2D hmap; uniform vec3 fogC; uniform float fogN, fogF; varying vec3 vW; varying float vDepth; varying vec3 vN; varying float vCrest;
      float th(vec2 w){ vec2 uv = vec2((w.x - (${Mn.X0.toFixed(1)})) / ${Mn.SZ.toFixed(1)}, (-w.y - (${Mn.Y0.toFixed(1)})) / ${Mn.SZ.toFixed(1)});
        if (uv.x < 0. || uv.y < 0. || uv.x > 1. || uv.y > 1.) return -8.; return texture2D(hmap, uv).r * 16. - 6.; }
      vec2 grad(vec2 p){ float e = .15; float a = svn(p); return vec2(svn(p + vec2(e, 0.)) - a, svn(p + vec2(0., e)) - a) / e; }
      void main(){
        float depth = -th(vW.xz); vec3 V = normalize(cameraPosition - vW); float dist = length(cameraPosition - vW);
        vec2 r1 = grad(vW.xz * .55 + vec2(time * .25, time * .1)), r2 = grad(vW.xz * 1.4 - vec2(time * .18, -time * .3));
        float rip = mix(1., .25, smoothstep(40., 160., dist));
        vec3 N = normalize(vN + vec3(r1.x + r2.x * .5, 0., r1.y + r2.y * .5) * .13 * rip);
        vec3 shallow = vec3(.30, .86, .78), mid = vec3(.05, .55, .66), deep = vec3(.02, .26, .44), abyss = vec3(.015, .16, .30);
        vec3 c = mix(vec3(.62, .9, .78), shallow, smoothstep(.0, .6, depth)); c = mix(c, mid, smoothstep(.5, 2.6, depth)); c = mix(c, deep, smoothstep(2.4, 6., depth)); c = mix(c, abyss, smoothstep(6., 12., depth + dist * .02));
        // caustics in the shallows
        vec2 cp = vW.xz * .9; float ca = abs(sin(cp.x * 2.1 + sin(cp.y * 1.7 + time * 1.1) * 1.6 + time * .6)) * abs(sin(cp.y * 2.3 + sin(cp.x * 1.3 - time * .9) * 1.8 - time * .5));
        c += vec3(.55, .95, .85) * pow(1. - ca, 10.) * .32 * (1. - smoothstep(.2, 2.6, depth));
        float ndl = max(dot(N, sunDir), 0.);
        c *= .78 + .3 * ndl;
        vec3 R = reflect(-V, N); R.y = abs(R.y);
        float fres = .03 + .97 * pow(1. - max(dot(N, V), 0.), 5.);
        c = mix(c, skyCol(R, false), clamp(fres, 0., .75));
        float sp = max(dot(R, sunDir), 0.);
        c += vec3(1., .82, .55) * (pow(sp, 260.) * 4. + pow(sp, 40.) * .35);
        // glitter
        float gl = svn(vW.xz * 6. + time * 2.) * svn(vW.xz * 3.7 - time * 1.3); c += vec3(1., .9, .7) * smoothstep(.62, .8, gl) * pow(sp, 6.) * 2.5;
        // foam: solid shore line + travelling bands + crests
        float n = sfbm(vW.xz * .6 + time * .05);
        float shore = 1. - smoothstep(.05, .32 + n * .25, depth);
        float bands = smoothstep(.72, .95, sin(depth * 4.2 - time * 1.6 + n * 5.)) * (1. - smoothstep(.2, 1.6 + n * .6, depth)) * step(.02, depth);
        float crest = smoothstep(.2, .34, vCrest + (n - .5) * .3) * smoothstep(.45, .7, svn(vW.xz * vec2(.7, 2.2) + time * .3)) * .5;
        float foam = clamp(shore + bands * .8 + crest, 0., 1.) * smoothstep(-.6, .0, depth + .5);
        c = mix(c, vec3(1., .98, .93) * (.85 + .2 * ndl), foam * .92);
        // fog to horizon
        float fz = smoothstep(fogN, fogF, dist); c = mix(c, fogC, fz);
        gl_FragColor = vec4(c, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),o=new Ee(i,a);return o.frustumCulled=!1,o.renderOrder=-5,o.receiveShadow=!1,o}var Mn,fh=Qe(()=>{wt();uh();Mn={X0:-60,Y0:-50,SZ:128}});function ph(s,e){if(e===Fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Br||e===ho){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Br)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var jd=Qe(()=>{wt()});function fy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function gy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),s.DefaultMaterial}function ss(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ui(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function vy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yy(s){let e,t=s.extensions&&s.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xh(t.attributes):e=s.indices+":"+xh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+xh(s.targets[n]);return e}function xh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Vh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _y(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function My(s,e,t){let n=e.attributes,i=new Wt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let u=Vh(Js[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Vh(Js[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new xn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function nf(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Hh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ze.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),ui(s,e),My(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xy(s,e.targets,t):s})}var go,He,vh,yh,_h,bh,Mh,Sh,wh,Th,Eh,Ah,Rh,Ch,Ph,Ih,Lh,Dh,Nh,Uh,sf,Vr,Qd,Oh,kh,Fh,Bh,xo,py,zh,Cn,Js,ef,tf,mh,Hh,Di,my,gh,by,Gh,rf=Qe(()=>{wt();jd();go=class extends Vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Uh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ii.extractUrlBase(e);a=Ii.resolveURL(c,this.path)}else a=Ii.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Pi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sf){try{a[He.KHR_BINARY_GLTF]=new Oh(e)}catch(h){i&&i(h);return}r=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Gh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:a[h]=new yh;break;case He.KHR_DRACO_MESH_COMPRESSION:a[h]=new kh(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[h]=new Fh;break;case He.KHR_MESH_QUANTIZATION:a[h]=new Bh;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vh=class{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Z(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Nt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ns(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ao(u),c.distance=h;break;case"spot":c=new ro(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},yh=class{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return gt}extendParams(e,t,n){let i=[];e.color=new Z(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}},_h=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},bh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Sh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Z(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,St)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Z().setRGB(o[0],o[1],o[2],Nt),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Rh=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Z().setRGB(o[0],o[1],o[2],Nt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,St)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Lh=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Dh=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Nh=class{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Uh=class{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Cn.TRIANGLES&&c.mode!==Cn.TRIANGLE_STRIP&&c.mode!==Cn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new Ne,m=new R,p=new zn,w=new R(1,1,1),b=new Gs(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&w.fromBufferAttribute(l.SCALE,y),b.setMatrixAt(y,x.compose(m,p,w));for(let y in l)if(y==="_COLOR_0"){let P=l[y];b.instanceColor=new es(P.array,P.itemSize,P.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Mt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},sf="glTF",Vr=12,Qd={JSON:1313821514,BIN:5130562},Oh=class{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Vr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Vr,r=new DataView(e,Vr),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Qd.JSON){let c=new Uint8Array(e,Vr+a,o);this.content=n.decode(c)}else if(l===Qd.BIN){let c=Vr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},kh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Hh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Hh[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Js[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},o,c,Nt,d)})})}},Fh=class{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bh=class{constructor(){this.name=He.KHR_MESH_QUANTIZATION}},xo=class extends Ai{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,w=1-m,b=p-d+h;for(let y=0;y!==o;y++){let P=a[x+y+o],A=a[x+y+l]*u,E=a[g+y+o],N=a[g+y]*u;r[y]=w*P+b*A+m*E+p*N}return r}},py=new zn,zh=class extends xo{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return py.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ef={9728:jt,9729:$t,9984:Kc,9985:yr,9986:Es,9987:Xn},tf={33071:kn,33648:Tr,10497:Ji},mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},my={CUBICSPLINE:void 0,LINEAR:Fs,STEP:ks},gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};by=new Ne,Gh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&a<98?this.textureLoader=new io(this.options.manager):this.textureLoader=new oo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ss(r,o,i),ui(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ii.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=mh[i.type],o=Js[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new mt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=mh[i.type],c=Js[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(w);b||(x=new c(o,p*f,i.count*f/u),b=new Ir(x,f/u),t.cache.add(w,b)),m=new Lr(b,l,d%f/u,g)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),m=new mt(x,l,g);if(i.sparse!==void 0){let p=mh.SCALAR,w=Js[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,P=new w(a[1],b,i.sparse.count*p),A=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,N=P.length;E<N;E++){let W=P[E];if(m.setX(W,A[E*l]),l>=2&&m.setY(W,A[E*l+1]),l>=3&&m.setZ(W,A[E*l+2]),l>=4&&m.setW(W,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=ef[d.magFilter]||$t,u.minFilter=ef[d.minFilter]||Xn,u.wrapS=tf[d.wrapS]||Ji,u.wrapT=tf[d.wrapT]||Ji,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Ft(x);m.needsUpdate=!0,d(m)}),t.load(Ii.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ui(h,a),h.userData.mimeType=a.mimeType||_y(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ur,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Nr,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return tt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){let h=i[He.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Z(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Nt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,St)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);let u=r.alphaMode||gh.OPAQUE;if(u===gh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===gh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==gt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==gt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==gt){let h=r.emissiveFactor;o.emissive=new Z().setRGB(h[0],h[1],h[2],Nt)}return r.emissiveTexture!==void 0&&a!==gt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),ui(h,r),t.associations.set(h,{materials:e}),r.extensions&&ss(i,h,r),h})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return nf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=yy(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=nf(new Rt,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?gy(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=a[f],p,w=c[f];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Wa(x,w):new Ee(x,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Cn.TRIANGLE_STRIP?p.geometry=ph(p.geometry,ho):m.mode===Cn.TRIANGLE_FAN&&(p.geometry=ph(p.geometry,Br));else if(m.mode===Cn.LINES)p=new Ka(x,w);else if(m.mode===Cn.LINE_STRIP)p=new Ws(x,w);else if(m.mode===Cn.LINE_LOOP)p=new Za(x,w);else if(m.mode===Cn.POINTS)p=new Xs(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&vy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ui(p,r),m.extensions&&ss(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ss(i,h[0],r),h[0];let d=new kt;r.extensions&&ss(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(is.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ei(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ui(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Ne;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qa(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",w)),c.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let w=0,b=d.length;w<b;w++){let y=d[w],P=f[w],A=g[w],E=x[w],N=m[w];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let W=n._createAnimationTracks(y,P,A,E,N);if(W)for(let v=0;v<W.length;v++)p.push(W[v])}return new no(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,by)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Dr:c.length>1?u=new kt:c.length===1?u=c[0]:u=new Mt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ui(u,r),r.extensions&&ss(n,u,r),r.matrix!==void 0){let h=new Ne;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new kt;n.name&&(r.name=i.createUniqueName(n.name)),ui(r,n),n.extensions&&ss(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof vn||d instanceof Ft)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];Di[r.path]===Di.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Di[r.path]){case Di.weights:c=li;break;case Di.rotation:c=ci;break;case Di.position:case Di.scale:c=hi;break;default:n.itemSize===1?c=li:c=hi;break}let u=i.interpolation!==void 0?my[i.interpolation]:Fs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Di[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Vh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ci?zh:xo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function Sy(){let s,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(u=>{let h=u.draco,d=new h.Decoder;try{let f=t(h,d,new Int8Array(l),c),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(a,o,l,c){let u=c.attributeIDs,h=c.attributeTypes,d,f,g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let x={index:null,attributes:[]};for(let m in u){let p=self[h[m]],w,b;if(c.useUniqueIDs)b=u[m],w=o.GetAttributeByUniqueId(d,b);else{if(b=o.GetAttributeId(d,a[u[m]]),b===-1)continue;w=o.GetAttribute(d,b)}let y=i(a,o,d,m,p,w);m==="color"&&(y.vertexColorSpace=c.vertexColorSpace),x.attributes.push(y)}return g===a.TRIANGULAR_MESH&&(x.index=n(a,o,d)),a.destroy(d),x}function n(a,o,l){let u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);let f=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,l,c,u,h){let d=h.num_components(),g=l.num_points()*d,x=g*u.BYTES_PER_ELEMENT,m=r(a,u),p=a._malloc(x);o.GetAttributeDataArrayForAllPoints(l,h,m,x,p);let w=new u(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:c,array:w,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var Wh,vo,af=Qe(()=>{wt();Wh=new WeakMap,vo=class extends Vn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new Pi(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,St,n).catch(n)}decodeDracoFile(e,t,n,i,r=Nt,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Wh.has(e)){let l=Wh.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Wh.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new Rt;e.index&&t.setIndex(new mt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,l=new mt(a,o);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==St)return;let n=new Z;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),ze.toWorkingColorSpace(n,St),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Pi(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=Sy.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}});function lf(s){let e=(n,i,r)=>{n.onBeforeCompile=a=>{a.uniforms.time=s.time,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float time;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { vec4 wp0 = modelMatrix * vec4(transformed, 1.); float s = uv.x; float ph = wp0.x * .35 + wp0.z * .27;
          ${r==="flag"?"float fl = sin(time * 7. + uv.x * 9. + ph * 3.) * .14 * s + sin(time * 11.3 + uv.x * 14.) * .05 * s; transformed += objectNormal * fl;":`vec3 d = vec3(sin(time * 1.3 + ph) + .45 * sin(time * 3.1 + ph * 2.3), 0., cos(time * 1.1 + ph * 1.3) * .6) * ${i.toFixed(3)} * s * s; transformed += d;`} }`)},n.customProgramCacheKey=()=>"sway_"+r},t=rs.mats;t.Body=new tt({vertexColors:!0,roughness:.86,metalness:0,envMapIntensity:.6}),t.Glow=new gt({vertexColors:!0,color:new Z(1.6,1.4,1.2)}),t.Leaf=new tt({vertexColors:!0,roughness:.75,metalness:0,side:on,envMapIntensity:.5}),e(t.Leaf,.22,"leaf"),t.Flag=new tt({vertexColors:!0,roughness:.9,side:on}),e(t.Flag,0,"flag"),t.Gold=new tt({vertexColors:!0,roughness:.28,metalness:1,envMapIntensity:1.4}),t.Glass=new tt({vertexColors:!0,roughness:.15,metalness:.2,envMapIntensity:1.5});for(let n in t)t[n].name=n;return t}function as(s,{cast:e=!0,receive:t=!0,still:n=!0}={}){return s.traverse(i=>{if(!i.isMesh)return;let r=i.material&&i.material.name;if(r&&r.startsWith("Tex_")){let a=rs.tex[r];if(!a){let o=i.material.map;o&&(o.anisotropy=4,o.colorSpace=St),a=rs.tex[r]=new tt({name:r,map:o,vertexColors:!0,roughness:.82,metalness:0,envMapIntensity:.6})}i.material=a}else i.material=rs.mats[r]||rs.mats.Body;i.castShadow=e&&r!=="Glow",i.receiveShadow=t,n&&(i.matrixAutoUpdate=!1,i.updateMatrix())}),s}async function cf(){let s=await new Promise((o,l)=>{let c=new Image;c.onload=()=>o(c),c.onerror=l,c.src="assets/height.png"}),e=document.createElement("canvas");e.width=s.width,e.height=s.height;let t=e.getContext("2d");t.drawImage(s,0,0);let n=t.getImageData(0,0,e.width,e.height).data,i=e.width,r=new Float32Array(i*i);for(let o=0;o<i*i;o++)r[o]=(n[o*4]*256+n[o*4+1])/65535*16-6;rs.height={H:r,N:i};let a=new Ft(s);return a.flipY=!1,a.needsUpdate=!0,a.magFilter=$t,a.minFilter=$t,a.generateMipmaps=!1,a.wrapS=a.wrapT=kn,a.colorSpace=Wn,a}function Ht(s,e){let t=rs.height;if(!t)return 0;let n=t.N,i=(s-Mn.X0)/Mn.SZ*n-.5,r=(-e-Mn.Y0)/Mn.SZ*n-.5,a=Math.floor(i),o=Math.floor(r),l=i-a,c=r-o,u=(h,d)=>t.H[Math.max(0,Math.min(n-1,d))*n+Math.max(0,Math.min(n-1,h))];return(u(a,o)*(1-l)+u(a+1,o)*l)*(1-c)+(u(a,o+1)*(1-l)+u(a+1,o+1)*l)*c}var Xh,of,js,rs,Qs=Qe(()=>{wt();rf();af();fh();Xh=new vo;Xh.setDecoderPath("lib/draco/");Xh.preload();of=new go;of.setDRACOLoader(Xh);js=s=>new Promise((e,t)=>of.load(s,e,void 0,t)),rs={mats:{},tex:{},height:null}});var yo,qh=Qe(()=>{yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Sn,wy,Yh,Ty,Ni,er=Qe(()=>{wt();Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wy=new Ei(-1,1,1,-1,0,1),Yh=class extends Rt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},Ty=new Yh,Ni=class{constructor(e){this._mesh=new Ee(Ty,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var tr,$h=Qe(()=>{wt();er();tr=class extends Sn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Li.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ni(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Gr,_o,Kh=Qe(()=>{er();Gr=class extends Sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},_o=class extends Sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var bo,hf=Qe(()=>{wt();qh();$h();Kh();Kh();bo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tr(yo),this.copyPass.material.blending=qn,this.clock=new lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gr!==void 0&&(a instanceof Gr?n=!0:a instanceof _o&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Mo,uf=Qe(()=>{wt();er();Mo=class extends Sn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Z}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}});var df,ff=Qe(()=>{wt();df={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Z(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var nr,pf=Qe(()=>{wt();er();qh();ff();nr=class s extends Sn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Z(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(r,a,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Kt(r,a,{type:_n});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Kt(r,a,{type:_n});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=df;this.highPassUniforms=Li.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=yo;this.copyUniforms=Li.clone(u.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Is,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Z,this.oldClearAlpha=1,this.basic=new gt,this.fsQuad=new Ni(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};nr.BlurDirectionX=new re(1,0);nr.BlurDirectionY=new re(0,1)});var mf,gf=Qe(()=>{mf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var So,xf=Qe(()=>{wt();er();gf();So=class extends Sn{constructor(){super();let e=mf;this.uniforms=Li.clone(e.uniforms),this.material=new eo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ze.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$c&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Ey,wo,vf=Qe(()=>{wt();hf();uf();pf();xf();$h();Ey={uniforms:{tDiffuse:{value:null},warm:{value:new Z(1.04,1,.94)},cool:{value:new Z(.9,.96,1.08)},sat:{value:1.12},con:{value:1.08},vig:{value:.28},lift:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec3 warm, cool; uniform float sat, con, vig, lift; varying vec2 vUv;
  void main(){ vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb; float l = dot(c, vec3(.299, .587, .114));
    c *= mix(cool, warm, smoothstep(.15, .85, l));
    c = mix(vec3(l), c, sat); c = (c - .5) * con + .5 + lift;
    vec2 d = vUv - .5; c *= 1. - vig * smoothstep(.35, .85, length(d * vec2(1.15, 1.)));
    gl_FragColor = vec4(clamp(c, 0., 1.), t.a); }`},wo=class{constructor(e){this.W=e;let t=e.R,n=t.getDrawingBufferSize(new re),i=new Kt(n.x,n.y,{type:_n,samples:e.q>=1?4:0});this.c=new bo(t,i),this.c.addPass(new Mo(e.scene,e.cam)),this.bloom=new nr(new re(n.x/2,n.y/2),.32,.55,.92),this.c.addPass(this.bloom),this.c.addPass(new So),this.grade=new tr(Ey),this.c.addPass(this.grade),this.setQuality(e.q)}setQuality(e){this.bloom.enabled=e>=2,this.enabled=e>=1}setMap(e){var i,r,a,o,l;let t=e.grade||{},n=this.grade.uniforms;n.warm.value.setRGB(...t.warm||[1.04,1,.94]),n.cool.value.setRGB(...t.cool||[.9,.96,1.08]),n.sat.value=(i=t.sat)!=null?i:1.12,n.con.value=(r=t.con)!=null?r:1.08,n.vig.value=(a=t.vig)!=null?a:.26,this.bloom.strength=(o=t.bloom)!=null?o:.3,this.bloom.threshold=(l=t.thr)!=null?l:.92}resize(e,t){this.c.setPixelRatio(this.W.R.getPixelRatio()),this.c.setSize(e,t)}render(){this.c.render()}}});var Ui,Ct,Oi,st,os,Wr,yf,Xr,ls,ki,di,_f,bf,To,dt,fi,Eo,ir,pi=Qe(()=>{Ui=(s,e,t,n,i)=>({x:s,z:-e,rot:t*Math.PI/180,r:n,h:i}),Ct={dock:Ui(-10.5,-.5,25,4,1),market:Ui(-3.5,9.5,0,4.8,3.206),tavern:Ui(-15,5.5,35,4.8,2.278),shipyard:Ui(12,.5,-40,4.6,1.83),vault:Ui(8.5,13,-15,4.6,3.163),tower:Ui(18.5,-13,-30,4.2,4.4),lighthouse:Ui(-21,-15.5,30,3.8,5.381),mine:Ui(41,9,-70,4.8,4.122)},Oi={x:1.5,z:-3,h:1},st=[{id:"dock",name:"Fishing Dock",icon:"\u{1F41F}",cost:4,grow:1.07,inc:1,time:1.2,mgr:120,desc:"Fresh catch for coin"},{id:"market",name:"Spice Market",icon:"\u{1F34D}",cost:60,grow:1.15,inc:60,time:3,mgr:3500,desc:"Exotic goods from far shores"},{id:"tavern",name:"Rum Tavern",icon:"\u{1F37A}",cost:720,grow:1.14,inc:540,time:6,mgr:4e4,desc:"Thirsty sailors pay well"},{id:"shipyard",name:"Shipyard",icon:"\u2693",cost:8640,grow:1.13,inc:4320,time:12,mgr:3e5,desc:"Builds ships, unlocks Raids"},{id:"vault",name:"Treasure Vault",icon:"\u{1F4B0}",cost:103680,grow:1.12,inc:51840,time:20,mgr:25e5,desc:"Gold makes more gold"},{id:"tower",name:"Cannon Fort",icon:"\u{1F4A3}",cost:124e4,grow:1.11,inc:622080,time:30,mgr:22e6,desc:"Tolls from passing ships. Boosts Raids"},{id:"lighthouse",name:"Lighthouse",icon:"\u{1F5FC}",cost:149e5,grow:1.1,inc:746e4,time:42,mgr:24e7,desc:"Guides fat merchant fleets in"},{id:"mine",name:"Skull Mine",icon:"\u{1F480}",cost:179e6,grow:1.09,inc:896e5,time:60,mgr:3e9,desc:"Cursed gold from Skull Isle",zone:2}],os=5e7,Wr=[10,25,50,100,150,200,300,400],yf=[1,10,25],Xr=s=>s>=yf[2]?3:s>=yf[1]?2:1,ls=[{id:"cook",name:"Salty Cook",r:0,icon:"\u{1F372}",fx:{b:"tavern",m:.5},txt:"Tavern +50%"},{id:"fisher",name:"Old Fisher",r:0,icon:"\u{1F3A3}",fx:{b:"dock",m:.5},txt:"Dock +50%"},{id:"trader",name:"Spice Trader",r:0,icon:"\u{1F9FA}",fx:{b:"market",m:.5},txt:"Market +50%"},{id:"carpenter",name:"Carpenter",r:0,icon:"\u{1FA9A}",fx:{b:"shipyard",m:.5},txt:"Shipyard +50%"},{id:"gunner",name:"Master Gunner",r:1,icon:"\u{1F4A5}",fx:{raid:.25},txt:"Raid damage +25%"},{id:"banker",name:"Shady Banker",r:1,icon:"\u{1F3A9}",fx:{b:"vault",m:1},txt:"Vault +100%"},{id:"navigator",name:"Navigator",r:1,icon:"\u{1F9ED}",fx:{ship:.5},txt:"Ship chests +50%"},{id:"quarter",name:"Quartermaster",r:1,icon:"\u{1F4DC}",fx:{offline:1},txt:"Offline time +1h"},{id:"parrot",name:"Captain Polly",r:2,icon:"\u{1F99C}",fx:{all:.15},txt:"All income +15%"},{id:"monkey",name:"Swift Monkey",r:2,icon:"\u{1F412}",fx:{speed:.1},txt:"All buildings 10% faster"},{id:"witch",name:"Sea Witch",r:3,icon:"\u{1F52E}",fx:{all:.4},txt:"All income +40%"},{id:"kraken",name:"Baby Kraken",r:3,icon:"\u{1F419}",fx:{raid:.5,all:.2},txt:"Raids +50%, income +20%"}],ki=[{n:"Common",c:"#c8d0d8",w:60},{n:"Rare",c:"#4fb4ff",w:28},{n:"Epic",c:"#c06aff",w:10},{n:"Legendary",c:"#ffc23a",w:2}],di=25,_f=[{t:"Tap the Fishing Dock to haul in coins",k:"collect",n:3,b:"dock",r:{g:10}},{t:"Upgrade the Fishing Dock to level 5",k:"level",b:"dock",n:5,r:{g:30}},{t:"Build the Spice Market",k:"level",b:"market",n:1,r:{p:5}},{t:"Hire a manager for the Dock",k:"mgr",b:"dock",n:1,r:{p:5}},{t:"Reach level 10 on the Dock",k:"level",b:"dock",n:10,r:{g:300}},{t:"Open a chest from a merchant ship",k:"ship",n:1,r:{p:10}},{t:"Build the Rum Tavern",k:"level",b:"tavern",n:1,r:{p:10}},{t:"Recruit a crew mate",k:"pull",n:1,r:{p:5}},{t:"Hire a manager for the Market",k:"mgr",b:"market",n:1,r:{p:10}},{t:"Build the Shipyard",k:"level",b:"shipyard",n:1,r:{p:15}},{t:"Win a sea Raid",k:"raid",n:1,r:{p:15}},{t:"Get the Tavern to level 25",k:"level",b:"tavern",n:25,r:{p:15}},{t:"Build the Treasure Vault",k:"level",b:"vault",n:1,r:{p:20}},{t:"Build the Cannon Fort",k:"level",b:"tower",n:1,r:{p:20}},{t:"Build the Lighthouse",k:"level",b:"lighthouse",n:1,r:{p:25}},{t:"Build the bridge to Skull Isle",k:"bridge",n:1,r:{p:25}},{t:"Build the Skull Mine",k:"level",b:"mine",n:1,r:{p:30}},{t:"Become a Pirate Legend (prestige)",k:"prestige",n:1,r:{p:50}}],bf=[{k:"earn",t:"Earn {n} gold",f:s=>Math.max(1e3,s*600)},{k:"upg",t:"Buy {n} upgrades",f:()=>40},{k:"ship",t:"Open {n} ship chests",f:()=>4},{k:"raid",t:"Win {n} raids",f:()=>2},{k:"collect",t:"Tap buildings {n} times",f:()=>60},{k:"pull",t:"Recruit {n} crew",f:()=>2},{k:"boost",t:"Use {n} Rum Rush boost",f:()=>1}],To=[{p:10},{p:15},{g:5},{p:25},{p:30},{g:15},{p:60}],dt=s=>{if(!isFinite(s))return"\u221E";if(s<1e3)return s<10&&s%1?s.toFixed(1):Math.floor(s).toString();let e=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"],t=0;for(;s>=1e3&&t<e.length-1;)s/=1e3,t++;return(s<10?s.toFixed(2):s<100?s.toFixed(1):Math.floor(s))+e[t]},fi=[{id:"sloop",name:"Swift Sloop",hp:100,dmg:1,cost:0,wins:0,s:1.15},{id:"brig",name:"War Brig",hp:140,dmg:1.25,cost:60,wins:1,s:1.05},{id:"frigate",name:"Royal Frigate",hp:190,dmg:1.5,cost:180,wins:3,s:.95}],Eo={bess:{node:"enemy",name:"Black Bess",hp:1,rate:[2.4,3.6],acc:.62,dmg:[18,26],loot:1,s:1,icon:"enemy"},corsair:{node:"corsair",name:"Crimson Corsair",hp:.85,rate:[2.6,3.4],acc:.7,dmg:[9,13],loot:1.2,volley:2,s:.95,tip:"fires double volleys",icon:"foe_corsair"},gold:{node:"galleon",name:"Treasure Galleon",hp:.8,rate:[3.6,4.8],acc:.5,dmg:[7,10],loot:1.9,flee:26,s:1.05,tip:"is fleeing with her gold",icon:"galleon"},ghost:{node:"ghost",name:"Ghost Galleon",hp:1.7,rate:[2.6,3.4],acc:.66,dmg:[15,21],loot:2.2,boss:!0,s:.85,tip:"BOSS \u2014 fades into the mist",icon:"foe_ghost"}},ir=["bess","corsair","gold","ghost"]});var Ao,Mf=Qe(()=>{wt();pi();Qs();Ao=class{constructor(e,t){this.scene=e,this.g={},this.t={},this.anim=[];let n={};t.scene.traverse(i=>{(i.isMesh||i.isGroup||i.isObject3D)&&/^(\w+)_(\d)$|^site$/.test(i.name)&&i.parent===t.scene&&(n[i.name]=i)}),t.scene.children.forEach(i=>n[i.name]=i),this.src=n,this.pick=[];for(let i in Ct){let r=Ct[i],a=new kt;a.position.set(r.x,r.h,r.z),a.rotation.y=r.rot,a.userData.id=i,e.add(a),this.g[i]=a;let o=new Ee(new An(r.r*.85,r.r*.85,7,10),new gt({visible:!1}));o.position.y=3,o.userData.id=i,a.add(o),this.pick.push(o),this.set(i,0,!1)}}set(e,t,n=!0){if(this.t[e]===t)return;this.t[e]=t;let i=this.g[e];i.userData.cur&&i.remove(i.userData.cur);let r=this.src[t?`${e}_${t}`:"site"];if(!r)return;let a=r.clone();a.position.set(0,0,0),a.rotation.set(0,0,0),as(a,{still:!1}),i.add(a),i.userData.cur=a,n&&this.anim.push({o:a,t:0})}update(e){for(let t=this.anim.length-1;t>=0;t--){let n=this.anim[t];n.t+=e;let i=Math.min(1,n.t/.55),r=i<1?1+Math.sin(i*Math.PI)*.18*(1-i)-(1-i)*(1-i)*.6:1;n.o.scale.set(r,Math.max(.05,r*(i<.3?i/.3:1)),r),i>=1&&(n.o.scale.set(1,1,1),this.anim.splice(t,1))}}}});function Ay(s){return new yt({transparent:!0,depthWrite:!1,blending:s?Is:Si,uniforms:{scale:{value:400}},vertexShader:`attribute float size; attribute vec4 col; attribute float shape; varying vec4 vC; varying float vS; uniform float scale;
      void main(){ vC = col; vS = shape; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec4 vC; varying float vS; void main(){ vec2 p = gl_PointCoord * 2. - 1.; float r = length(p);
      float a = vS < .5 ? smoothstep(1., .2, r) : vS < 1.5 ? smoothstep(1., .55, r) * (.6 + .4 * smoothstep(.0, .9, r)) : (1. - smoothstep(.15, .35, min(abs(p.x), abs(p.y)) + r * .3)) ;
      if (vS > 2.5) a = step(abs(p.x), .55) * step(abs(p.y), .9);
      if (a * vC.a < .01) discard; gl_FragColor = vec4(vC.rgb, a * vC.a); }`})}var Tt,Ro,Co,Sf=Qe(()=>{wt();Qs();Tt=R;Ro=class{constructor(e,t,n){this.N=t,this.list=[];let i=this.g=new Rt;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.shape=new Float32Array(t),i.setAttribute("position",new mt(this.pos,3).setUsage(zr)),i.setAttribute("col",new mt(this.col,4).setUsage(zr)),i.setAttribute("size",new mt(this.size,1).setUsage(zr)),i.setAttribute("shape",new mt(this.shape,1).setUsage(zr)),this.mesh=new Xs(i,Ay(n)),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,e.add(this.mesh)}add(e){this.list.length>=this.N&&this.list.shift(),e.t=0,this.list.push(e)}update(e){let t=this.list,n=0;for(let i=t.length-1;i>=0;i--){let r=t[i];if(r.t+=e,r.t>=r.life){t.splice(i,1);continue}}for(let i of t){i.v.y-=(i.g||0)*e,i.flut&&(i.p.x+=Math.sin(i.t*3.1+i.ph)*e*1.2,i.p.z+=Math.cos(i.t*2.7+i.ph)*e*1.2),i.drag&&i.v.multiplyScalar(Math.pow(i.drag,e)),i.p.addScaledVector(i.v,e),i.floor!==void 0&&i.p.y<i.floor&&(i.p.y=i.floor,i.v.y*=-.3,i.v.x*=.6,i.v.z*=.6);let r=i.t/i.life,a=i.c;this.pos.set([i.p.x,i.p.y,i.p.z],n*3);let o=(i.fadeIn?Math.min(1,r*6):1)*(1-Math.pow(r,i.fadePow||2))*(i.a||1),l=i.c2?[a.r+(i.c2.r-a.r)*r,a.g+(i.c2.g-a.g)*r,a.b+(i.c2.b-a.b)*r]:[a.r,a.g,a.b];this.col.set([l[0],l[1],l[2],o],n*4),this.size[n]=(i.s0+(i.s1-i.s0)*r)*(i.flut?.35+.65*Math.abs(Math.sin(i.t*i.flut+i.ph)):1),this.shape[n]=i.shape||0,n++}this.g.setDrawRange(0,n);for(let i of["position","col","size","shape"])this.g.attributes[i].needsUpdate=!0}},Co=class{constructor(e,t){this.V=e;let n=e.scene;this.add=new Ro(n,700,!0),this.norm=new Ro(n,700,!1);let i=null,r=null;t.scene.traverse(l=>{l.isMesh&&l.name.startsWith("coin")&&(i=l.geometry,r=l.material)}),this.coinMax=160,this.coins=[],this.cmesh=new Gs(i,r,this.coinMax),this.cmesh.frustumCulled=!1,this.cmesh.castShadow=!1,this.cmesh.count=0,n.add(this.cmesh),this.dummy=new Mt;let a=new Or(.92,1,64,1);a.rotateX(-Math.PI/2),this.ring=new Ee(a,new yt({transparent:!0,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"uniform float time; varying vec2 vU; void main(){ float a = atan(vU.y, vU.x); float d = step(.5, fract(a * 6.3662 + time * .6)); gl_FragColor = vec4(1., .86, .35, .55 + .35 * d); }"})),this.ring.visible=!1,this.ring.renderOrder=4,n.add(this.ring),this.shocks=[],this.confB=0;let o=new Or(.7,1,48,1);o.rotateX(-Math.PI/2),this.shockG=o}select(e,t){if(!e){this.ring.visible=!1;return}this.ring.visible=!0,this.ring.position.set(e.x,e.h+.12,e.z),this.ring.scale.setScalar(t+.8)}coinBurst(e,t=8,n=6){for(let i=0;i<t;i++){this.coins.length>=this.coinMax&&this.coins.shift();let r=Math.random()*6.283,a=1.2+Math.random()*2.2;this.coins.push({p:e.clone().add(new Tt(0,.5,0)),v:new Tt(Math.cos(r)*a,n+Math.random()*3,Math.sin(r)*a),r:Math.random()*6,rv:8+Math.random()*8,t:0,life:1.1+Math.random()*.4,floor:Ht(e.x,e.z)+.1})}}sparkle(e,t=12,n=16766810,i=1.4,r=.5){let a=new Z(n);for(let o=0;o<t;o++)this.add.add({p:e.clone().add(new Tt((Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i)),v:new Tt((Math.random()-.5)*2,1.5+Math.random()*2,(Math.random()-.5)*2),g:1,drag:.3,life:.6+Math.random()*.6,c:a,s0:r,s1:r*.2,shape:2})}puff(e,t=14,n=15918800,i=1.6,r=1.2,a=2.2,o=1){let l=new Z(n);for(let c=0;c<t;c++){let u=Math.random()*6.283,h=Math.random()*a;this.norm.add({p:e.clone().add(new Tt(Math.cos(u)*h,Math.random()*.6,Math.sin(u)*h)),v:new Tt(Math.cos(u)*1.6,r+Math.random(),Math.sin(u)*1.6),drag:.25,life:(.7+Math.random()*.5)*o,c:l,s0:i*.6,s1:i*1.6,a:.7,fadeIn:!0,fadePow:1.4,shape:1})}}splash(e,t=1){let n=new Z(16777215);for(let i=0;i<26*t;i++){let r=Math.random()*6.283,a=Math.random()*2.5*t;this.norm.add({p:e.clone(),v:new Tt(Math.cos(r)*a,5+Math.random()*6*t,Math.sin(r)*a),g:18,life:.8+Math.random()*.4,c:n,s0:.5*t,s1:.25,a:.9,shape:0,floor:e.y-.3})}this.shock(e,3*t,16777215,.8)}explode(e,t=1){let n=new Z(16752688),i=new Z(16723984);for(let r=0;r<30*t;r++){let a=Math.random()*6.283,o=Math.random()*1.2,l=2+Math.random()*6*t;this.add.add({p:e.clone(),v:new Tt(Math.cos(a)*l*Math.cos(o),Math.sin(o)*l+1,Math.sin(a)*l*Math.cos(o)),drag:.05,g:2,life:.35+Math.random()*.4,c:n,c2:i,s0:1.6*t,s1:.4,shape:0})}this.puff(e,16*t,3814446,2.2*t,2.4,1.2),this.sparkle(e,10,16760896,2,.6),this.shock(e,5*t,16756816,.6)}confetti(e,t=60){if(t=Math.min(t,Math.max(0,Math.floor(140-this.confB))),this.confB+=t,!t)return;let n=[16765498,16734794,5230847,8314970,16747232,16777215].map(i=>new Z(i));for(let i=0;i<t;i++){let r=Math.random()*6.283,a=1.5+Math.random()*4;this.norm.add({p:e.clone(),v:new Tt(Math.cos(r)*a,7+Math.random()*6,Math.sin(r)*a),g:7,drag:.12,life:1.2+Math.random()*.8,c:n[i%n.length],s0:.42,s1:.32,shape:3,fadePow:3,flut:6+Math.random()*8,ph:Math.random()*6})}}muzzle(e,t){let n=Math.random,i=new Z(16774344),r=new Z(16742936),a=new Z(15131096),o=new Z(10130570);this.add.add({p:e.clone(),v:t.clone().multiplyScalar(1.5),life:.2,c:i,c2:r,s0:11,s1:4,shape:0});for(let l=0;l<16;l++)this.add.add({p:e.clone(),v:t.clone().multiplyScalar(7+n()*12).add(new Tt((n()-.5)*4,(n()-.3)*3,(n()-.5)*4)),drag:.02,life:.16+n()*.18,c:i,c2:r,s0:2.4,s1:.4,shape:0});for(let l=0;l<18;l++)this.norm.add({p:e.clone().addScaledVector(t,n()*1.8),v:t.clone().multiplyScalar(1.5+n()*4.5).add(new Tt((n()-.5)*1.4,.6+n()*1.2,(n()-.5)*1.4)),drag:.12,life:1.5+n()*1.1,c:a,c2:o,s0:1.1,s1:4,a:.8,fadeIn:!0,fadePow:1.4,shape:1});this.sparkle(e,6,16760928,.8,.5)}ballTrail(e){let t=Math.random;this.add.add({p:e.clone(),v:new Tt(0,0,0),life:.22,c:new Z(16760912),c2:new Z(16726536),s0:1.1,s1:.15,shape:0}),t()<.7&&this.norm.add({p:e.clone(),v:new Tt((t()-.5)*.4,.5,(t()-.5)*.4),life:.9,c:new Z(12104360),s0:.5,s1:1.6,a:.55,fadePow:1.3,shape:1})}splinters(e,t=18){let n=Math.random,i=[6963234,9067056,13146714,3810324].map(r=>new Z(r));for(let r=0;r<t;r++){let a=n()*6.283,o=3+n()*7;this.norm.add({p:e.clone(),v:new Tt(Math.cos(a)*o,5+n()*8,Math.sin(a)*o),g:20,drag:.5,life:.9+n()*.6,c:i[r%4],s0:.5,s1:.4,shape:3,flut:14+n()*10,ph:n()*6,fadePow:5})}}waterColumn(e,t=1){let n=Math.random,i=new Z(16777215),r=new Z(12577525);for(let a=0;a<22*t;a++)this.norm.add({p:e.clone().add(new Tt((n()-.5)*.8,0,(n()-.5)*.8)),v:new Tt((n()-.5)*1.6,8+n()*9*t,(n()-.5)*1.6),g:20,drag:.7,life:.9+n()*.5,c:i,c2:r,s0:.9*t,s1:.5,a:.95,shape:0,floor:e.y-.4});this.splash(e,t),this.puff(e.clone().add(new Tt(0,.3,0)),7,16055295,1.1*t,.4,1.4*t)}flame(e,t=1){let n=Math.random;this.add.add({p:e.clone().add(new Tt((n()-.5)*.8*t,0,(n()-.5)*.8*t)),v:new Tt((n()-.5)*.6,1.8+n()*1.8,(n()-.5)*.6),life:.45+n()*.3,c:new Z(16765024),c2:new Z(16722432),s0:2*t,s1:.3,shape:0}),n()<.25&&this.norm.add({p:e.clone().add(new Tt(0,1,0)),v:new Tt((n()-.5)*.8,2+n()*1.5,(n()-.5)*.8),drag:.4,life:1.6+n(),c:new Z(3814448),c2:new Z(6972512),s0:1*t,s1:3.4*t,a:.65,fadeIn:!0,fadePow:1.3,shape:1})}hit(e,t=1){this.explode(e,t),this.splinters(e,Math.round(18*t)),this.add.add({p:e.clone(),v:new Tt(0,0,0),life:.18,c:new Z(16777215),c2:new Z(16752704),s0:9*t,s1:3,shape:0})}clear(){this.add.list.length=0,this.norm.list.length=0,this.coins.length=0,this.confB=0,this.shocks.forEach(e=>{this.V.scene.remove(e.m),e.m.material.dispose()}),this.shocks.length=0}shock(e,t,n,i=.6){let r=new Ee(this.shockG,new gt({color:n,transparent:!0,depthWrite:!1,opacity:.8}));r.position.copy(e),r.position.y+=.15,r.renderOrder=4,this.V.scene.add(r),this.shocks.push({m:r,r:t,t:0,life:i})}trail(e,t=2761760,n=.7){this.norm.add({p:e.clone(),v:new Tt(0,.4,0),life:.5,c:new Z(t),s0:n,s1:n*1.8,a:.6,shape:1})}wake(e){this.norm.add({p:e.clone(),v:new Tt((Math.random()-.5)*.6,.05,(Math.random()-.5)*.6),life:1.8,c:new Z(16055295),s0:.7,s1:1.8,a:.55,shape:1,fadeIn:!0})}update(e,t){this.add.update(e),this.norm.update(e),this.confB=Math.max(0,this.confB-e*90),this.ring.material.uniforms.time.value=t,this.ring.visible&&(this.ring.position.y+=Math.sin(t*3)*.002);let n=this.dummy,i=0;for(let r=this.coins.length-1;r>=0;r--){let a=this.coins[r];a.t+=e,a.t>a.life&&this.coins.splice(r,1)}for(let r of this.coins){r.v.y-=22*e,r.p.addScaledVector(r.v,e),r.p.y<r.floor&&(r.p.y=r.floor,r.v.y=Math.abs(r.v.y)*.35,r.v.x*=.5,r.v.z*=.5),r.r+=r.rv*e;let a=r.t/r.life,o=a>.75?(1-a)/.25:Math.min(1,r.t*8);n.position.copy(r.p),n.rotation.set(Math.PI/2,0,r.r),n.scale.setScalar(Math.max(.01,o)*.55),n.updateMatrix(),this.cmesh.setMatrixAt(i++,n.matrix)}this.cmesh.count=i,this.cmesh.instanceMatrix.needsUpdate=!0;for(let r=this.shocks.length-1;r>=0;r--){let a=this.shocks[r];a.t+=e;let o=a.t/a.life;a.m.scale.setScalar(.3+a.r*(1-Math.pow(1-o,3))),a.m.material.opacity=.8*(1-o),o>=1&&(this.V.scene.remove(a.m),a.m.material.dispose(),this.shocks.splice(r,1))}}}});function wf(s){return new ts(s.map(e=>new Fi(e[0],0,e[1])),!1,"centripetal")}var Fi,Zh,tb,Ry,Cy,Po,Tf=Qe(()=>{wt();Qs();pi();Fi=R,Zh=(s,e,t)=>Math.sin(s*.33+t*1.3)*.12+Math.sin(e*.41-t*1.1)*.09;tb=new Fi(5.6,0,9.5),Ry=[[[60,110],[30,52],[12,28],[6.2,16],[5.6,9.5]],[[-50,105],[-20,55],[0,30],[5,17],[5.6,9.5]]],Cy=[[[5.6,9.5],[6.5,20],[16,36],[50,70],[110,120]],[[5.6,9.5],[4.5,20],[-8,38],[-45,70],[-110,110]]],Po=class{constructor(e,t,n,i,r){this.V=e,this.fx=i;let a={};t.scene.children.forEach(o=>a[o.name]=o),n.scene.children.forEach(o=>a[o.name]=o),r&&r.scene.children.forEach(o=>a[o.name]=o),this.src=a,this.ships=[],this.pirates=[],this.gulls=[],this.t=0,this.pick=[],this.props();for(let o=0;o<6;o++)this.addGull(o);this.cruiser=this.mk("galleon"),this.cruiser.scale.setScalar(1.1),e.scene.add(this.cruiser),this.cruiseT=0}mk(e,t=!0){let n=this.src[e].clone();return n.position.set(0,0,0),n.rotation.set(0,0,0),as(n,{still:!1,cast:t}),n}place(e,t,n,{rot:i=0,s:r=1,y:a=null,parent:o=null}={}){let l=this.mk(e);return l.position.set(t,a===null?Ht(t,n)-.05:a,n),l.rotation.y=i,l.scale.setScalar(r),(o||this.V.scene).add(l),l}local(e,t,n){let i=Ct[e],r=Math.cos(i.rot),a=Math.sin(i.rot);return[i.x+t*r+n*a,i.z-t*a+n*r]}props(){let e=(t,n,i,r,a={})=>{let[o,l]=this.local(t,n,i);return this.place(r,o,l,{rot:Ct[t].rot+(a.rot||0),s:a.s||1})};this.statue=this.place("statue",Oi.x,Oi.z,{rot:.2,s:.95}),e("tavern",3.6,3.4,"barrels",{rot:.5}),this.parrot=e("tavern",3.6,3.4,"parrot",{rot:-.4,s:.9}),this.parrot.position.y+=1.45,this.parrotY=this.parrot.position.y,e("dock",-3.4,2.6,"barrels",{rot:1.2,s:.85}),e("vault",3.2,3.2,"chest",{rot:-.5,s:1.1}),e("vault",-3.3,3,"gold",{rot:.3,s:1.1}),e("tower",-3,3.4,"cannon",{rot:.2}),e("tower",3.2,3.2,"cannon",{rot:-.3}),e("shipyard",4.2,3.6,"figurehead",{rot:-.6,s:.9}),e("market",-3.6,3.4,"barrels",{rot:2.2,s:.8}),this.mineGold=e("mine",3.5,3.4,"gold",{rot:.4,s:1.2}),this.skull=this.place("skullrock",47.5,-3.5,{rot:-.9,s:1.2}),this.skull.position.y=Math.max(this.skull.position.y,-.6),this.place("chest",1.6,12.6,{y:1.12,rot:.3,s:.8})}addGull(e){let t=this.mk("gull",!1),n=this.mk("gull_wing",!1),i=this.mk("gull_wing",!1);i.scale.x=-1,t.add(n,i),t.scale.setScalar(.9),this.V.scene.add(t),this.gulls.push({o:t,w1:n,w2:i,cx:-10+Math.random()*40,cz:-14+Math.random()*30,r:10+Math.random()*14,h:11+Math.random()*7,sp:(.18+Math.random()*.12)*(e%2?1:-1),a:Math.random()*6.28,ph:Math.random()*10})}setCrowd(e,t){for(this.built=t;this.pirates.length<e;){let n=this.mk("pirate_"+this.pirates.length%6);n.scale.setScalar(.82),this.V.scene.add(n);let i={o:n,st:"idle",w:Math.random()*3,pos:this.plazaPt(),ph:Math.random()*6};n.position.copy(i.pos),this.pirates.push(i)}}plazaPt(){let e=Math.random()*6.283,t=2.6+Math.random()*1.6,n=Oi.x+Math.cos(e)*t,i=Oi.z+Math.sin(e)*t;return new Fi(n,Ht(n,i),i)}frontPt(e){let t=Ct[e].r+.6+Math.random()*.8,[n,i]=this.local(e,(Math.random()-.5)*2.4,t);return new Fi(n,Ht(n,i),i)}updPirates(e){for(let t of this.pirates){if(t.st==="idle"){if(t.w-=e,t.w<=0){let r=t.at;t.at=r&&r!=="plaza"||!this.built.length||Math.random()<.25?"plaza":this.built[Math.floor(Math.random()*this.built.length)],t.goal=t.at==="plaza"?this.plazaPt():this.frontPt(t.at),t.st="walk"}}else{let r=new Fi().subVectors(t.goal,t.pos);r.y=0;let a=r.length(),o=1.7;if(a<.1)t.st="idle",t.w=1.5+Math.random()*4;else{r.multiplyScalar(Math.min(a,o*e)/a),t.pos.add(r),t.pos.y=Ht(t.pos.x,t.pos.z);let c=Math.atan2(r.x,r.z)-t.o.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c)),t.o.rotation.y+=c*Math.min(1,e*10)}}let n=t.st==="walk",i=this.t*9+t.ph;t.o.position.set(t.pos.x,t.pos.y+(n?Math.abs(Math.sin(i))*.14:Math.abs(Math.sin(i*.25))*.03),t.pos.z),t.o.rotation.z=n?Math.sin(i)*.1:0}}spawnMerchant(e,t,n){if(this.ships.some(c=>c.kind==="merchant"))return null;let i=this.mk(n||(e?"galleon":"sloop"));this.V.scene.add(i);let r=Math.floor(Math.random()*2),a={kind:"merchant",o:i,path:wf(Ry[r]),out:Cy[r],u:0,st:"in",sink:n==="trader"?.7:e?.9:.55,speed:6.5,reward:t,wait:0,galleon:e};a.len=a.path.getLength();let o=new Wt().setFromObject(i).getSize(new Fi),l=new Ee(new ln(Math.max(3.2,o.x*.8),7,Math.max(7,o.z*.9)),new gt({visible:!1}));return l.position.y=2,l.userData.ship=a,i.add(l),a.hit=l,this.pick.push(l),this.ships.push(a),a}leave(e){e.st="out",e.path=wf(e.out),e.len=e.path.getLength(),e.u=0,e.reward=null,this.pick=this.pick.filter(t=>t!==e.hit)}updShips(e){let t=this.t;for(let o=this.ships.length-1;o>=0;o--){let l=this.ships[o],c=l.o;if(l.st==="in"||l.st==="out"){let h=l.st==="in"?Math.min(1,(1-l.u)*l.len/10+.15):Math.min(1,.2+l.u*l.len/8);l.u=Math.min(1,l.u+e*l.speed*h/l.len);let d=l.path.getPointAt(l.u),f=l.path.getTangentAt(l.u);c.position.set(d.x,0,d.z);let x=Math.atan2(f.x,f.z)-c.rotation.y;if(x=Math.atan2(Math.sin(x),Math.cos(x)),c.rotation.y+=x*Math.min(1,e*3),l.lean=-x*.6,Math.random()<e*10&&this.fx.wake(new Fi(d.x-f.x*3,.05,d.z-f.z*3)),l.u>=1)if(l.st==="in")l.st="dock",l.wait=24,this.onDock&&this.onDock(l);else{this.V.scene.remove(c),this.ships.splice(o,1);continue}}else l.st==="dock"&&(l.wait-=e,l.lean=0,l.wait<=0&&(this.onLeave&&this.onLeave(l),this.leave(l)));let u=Zh(c.position.x,c.position.z,t);c.position.y=-l.sink+u,c.rotation.x=Math.sin(t*1.2+c.position.x)*.03,c.rotation.z=Math.sin(t*.9+c.position.z)*.04+(l.lean||0)*.3}this.cruiseT+=e;let n=this.cruiser,i=this.cruiseT/140%1,r=-130+i*260,a=-62-Math.sin(i*3.14)*6;n.position.set(r,-1+Zh(r,a,t)*.5,a),n.rotation.y=Math.PI/2-Math.cos(i*3.14)*.05,n.rotation.z=Math.sin(t*.8)*.03}spawnBottle(){if(this.bottle)return;let e=[[-6,6],[13,9],[-26,4],[24,0],[-2,24],[26,22]],t=e[Math.floor(Math.random()*e.length)],n=new kt,i=new Ee(new An(.28,.32,1.1,10),new tt({color:8380592,roughness:.1,metalness:.1,transparent:!0,opacity:.8,emissive:1728576})),r=new Ee(new An(.12,.2,.4,8),i.material);r.position.y=.72;let a=new Ee(new An(.11,.11,.2,8),new tt({color:10119738}));a.position.y=1;let o=new Ee(new An(.16,.16,.7,8),new tt({color:15917744,emissive:3813392}));n.add(i,r,a,o),n.rotation.z=1.2,n.scale.setScalar(1.3),this.V.scene.add(n);let l=new Ee(new en(2.4,8,6),new gt({visible:!1}));n.add(l),l.userData.bottle=!0,this.pick.push(l),this.bottle={g:n,hit:l,x:t[0],z:t[1],life:16}}takeBottle(){let e=this.bottle;return e?(this.V.scene.remove(e.g),this.pick=this.pick.filter(t=>t!==e.hit),this.bottle=null,new Fi(e.x,.3,e.z)):null}update(e){this.t+=e;let t=this.t;this.updPirates(e),this.updShips(e);for(let n of this.gulls){n.a+=n.sp*e;let i=n.cx+Math.cos(n.a)*n.r,r=n.cz+Math.sin(n.a)*n.r;n.o.position.set(i,n.h+Math.sin(t*.7+n.ph)*1.2,r),n.o.rotation.y=Math.atan2(-Math.sin(n.a)*Math.sign(n.sp),Math.cos(n.a)*Math.sign(n.sp)),n.o.rotation.z=-Math.sign(n.sp)*.25;let a=Math.sin(t*7+n.ph)*(Math.sin(t*.5+n.ph)>.2?.55:.12);n.w1.rotation.z=a,n.w2.rotation.z=-a}if(this.parrot&&(this.parrot.position.y=this.parrotY+Math.max(0,Math.sin(t*2.4))*(Math.sin(t*.37)>.7?.3:0),this.parrot.rotation.y+=Math.sin(t*.9)*.004),this.bottle){let n=this.bottle;n.life-=e,n.g.position.set(n.x+Math.sin(t*.4)*.5,.15+Zh(n.x,n.z,t)*1.5,n.z),n.g.rotation.x=Math.sin(t*1.7)*.25,Math.random()<e*6&&this.fx.sparkle(n.g.position,1,11075535,1.2,.5),n.life<=0&&this.takeBottle()}}}});var Ef,Af=Qe(()=>{Ef=`
@font-face{font-family:Lilita;src:url(assets/LilitaOne.ttf)}@font-face{font-family:Pirata;src:url(assets/PirataOne.ttf)}
#ui{position:fixed;inset:0;pointer-events:none;font-family:Lilita,system-ui,sans-serif;color:#fff;font-size:var(--fs,15px);-webkit-tap-highlight-color:transparent}
#ui *{box-sizing:border-box}
#ui .pe{pointer-events:auto}
.ts{text-shadow:0 2px 0 #3a2210,0 0 3px #3a2210,1px 1px 0 #3a2210,-1px 1px 0 #3a2210}
.ico{width:1.6em;height:1.6em;object-fit:contain;vertical-align:middle;filter:drop-shadow(0 2px 1px rgba(0,0,0,.35))}
#top{position:absolute;left:0;right:0;top:0;display:flex;gap:.5em;padding:calc(.6em + env(safe-area-inset-top)) .7em 0;align-items:flex-start}
.pill{display:flex;align-items:center;gap:.35em;background:linear-gradient(#4a2e18f0,#2e1a0cf0);border:.16em solid #e9b844;border-radius:2em;padding:.18em .9em .18em .25em;box-shadow:0 .25em 0 #1d0f05,0 .4em .8em rgba(0,0,0,.35);white-space:nowrap}
.pill .ico{width:2.1em;height:2.1em;margin:-.3em 0}
#goldP{min-width:9.5em;flex-direction:column;align-items:flex-start;padding:.2em .9em .25em 2.6em;position:relative;border-radius:1.1em}
#goldP .ico{position:absolute;left:-.25em;top:50%;transform:translateY(-50%);width:2.9em;height:2.9em}
#gold{font-size:1.7em;line-height:1;color:#ffe27a}
#gps{font-size:.9em;color:#bff38e;line-height:1.1}
#pearlP{font-size:1.15em;color:#e6f6ff}
#starP{font-size:1.15em;color:#ffe9a0}
.star{color:#ffd23a;text-shadow:0 0 .4em #ffb000,0 2px 0 #6a4000;font-size:1.3em}
.plus{display:inline-grid;place-items:center;width:1.25em;height:1.25em;border-radius:50%;background:#5fc93b;box-shadow:0 .12em 0 #2c7016;margin-left:.2em;font-size:.9em}
.bump{animation:bump .25s}
@keyframes bump{40%{transform:scale(1.12)}}
#topR{margin-left:auto;display:flex;gap:.45em}
.rbtn{width:2.8em;height:2.8em;border-radius:50%;display:grid;place-items:center;background:linear-gradient(#5a3a20,#3a2210);border:.15em solid #e9b844;box-shadow:0 .2em 0 #1d0f05;cursor:pointer}
.rbtn svg{width:1.5em;height:1.5em;fill:#ffe9b0}
#rumP{position:absolute;top:calc(4.4em + env(safe-area-inset-top));left:.9em;font-size:.95em;color:#ffcf8a;display:none}
#side{position:absolute;left:.6em;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:.75em}
#sideR{position:absolute;right:.6em;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:.75em}
.sb{position:relative;width:4.4em;height:4.4em;border-radius:1.1em;background:radial-gradient(circle at 50% 30%,#7a5230,#3e2412);border:.18em solid #e9b844;box-shadow:0 .28em 0 #1d0f05,0 .5em 1em rgba(0,0,0,.35);display:grid;place-items:center;cursor:pointer;transition:transform .1s}
.sb:active{transform:translateY(.15em) scale(.96)}
.sb img{width:3.3em;height:3.3em;margin-top:-.5em;object-fit:contain;filter:drop-shadow(0 .15em .1em rgba(0,0,0,.5))}
.sb b{position:absolute;bottom:-.45em;left:50%;transform:translateX(-50%);font-weight:normal;font-size:.82em;background:#2e1a0c;border:.12em solid #e9b844;border-radius:.6em;padding:0 .45em;white-space:nowrap}
.sb .bdg{position:absolute;top:-.4em;right:-.4em;min-width:1.4em;height:1.4em;border-radius:1em;background:#e8402c;border:.12em solid #fff;font-size:.85em;display:none;place-items:center;padding:0 .25em;animation:pulse 1s infinite}
.sb.on .bdg{display:grid}
.sb .cd{position:absolute;inset:0;border-radius:1em;background:rgba(10,5,0,.6);display:grid;place-items:center;font-size:1.05em}
.sb.lock{filter:grayscale(.85) brightness(.7)}
@keyframes pulse{50%{transform:scale(1.15)}}
#quest{position:absolute;left:50%;bottom:calc(.8em + env(safe-area-inset-bottom));transform:translateX(-50%);width:min(34em,94vw);display:flex;align-items:center;gap:.6em;
  background:linear-gradient(#f8e6bd,#e8c98c);border:.2em solid #6a4322;border-radius:1em;padding:.4em .55em .4em .4em;box-shadow:0 .3em 0 #3a2210,0 .6em 1.2em rgba(0,0,0,.35);color:#4a2a12;transition:transform .3s, bottom .3s}
#quest.hide{transform:translate(-50%,180%)}
#quest .qi{width:2.8em;height:2.8em;flex:none;border-radius:.6em;background:#6a4322;display:grid;place-items:center}
#quest .qi img{width:2.4em;height:2.4em}
#quest .qt{flex:1;min-width:0;line-height:1.15}
#quest .qt small{display:block;color:#8a5a2a;font-size:.78em;letter-spacing:.05em}
#quest .qb{height:.6em;background:#c9a56a;border-radius:1em;margin-top:.25em;overflow:hidden;box-shadow:inset 0 .1em .15em rgba(0,0,0,.25)}
#quest .qb i{display:block;height:100%;background:linear-gradient(#ffd85a,#e8a020);width:0;transition:width .3s}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.3em;border:none;font:inherit;color:#fff;cursor:pointer;border-radius:.7em;padding:.45em 1em;background:linear-gradient(#7ee052,#46a92a);box-shadow:0 .25em 0 #2a6a14,0 .4em .6em rgba(0,0,0,.25);
  text-shadow:0 .1em 0 #2a5a10;transition:transform .08s,filter .1s;font-size:1em;white-space:nowrap}
.btn:active{transform:translateY(.18em);box-shadow:0 .07em 0 #2a6a14}
.btn.off{filter:grayscale(1) brightness(.8);cursor:default}
.btn.gold{background:linear-gradient(#ffd85a,#f0a51c);box-shadow:0 .25em 0 #9a5a08;text-shadow:0 .1em 0 #8a4a00}
.btn.blue{background:linear-gradient(#5ec8ff,#2a86d8);box-shadow:0 .25em 0 #14508a;text-shadow:0 .1em 0 #14508a}
.btn.red{background:linear-gradient(#ff7a5a,#d8402a);box-shadow:0 .25em 0 #8a2010;text-shadow:0 .1em 0 #8a2010}
.btn.purple{background:linear-gradient(#c88aff,#8a4ad8);box-shadow:0 .25em 0 #4a1a8a;text-shadow:0 .1em 0 #4a1a8a}
.btn .ico{width:1.4em;height:1.4em}
.glow{animation:glow 1.2s infinite}
@keyframes glow{50%{filter:brightness(1.18);box-shadow:0 .25em 0 #9a5a08,0 0 1.2em #ffd85a}}
#labels{position:absolute;inset:0;overflow:hidden}
.lbl{position:absolute;left:0;top:0;transform-origin:50% 100%;display:flex;flex-direction:column;align-items:center;will-change:transform}
.lbl .lv{display:flex;align-items:center;gap:.3em;background:rgba(40,22,10,.82);border:.13em solid #e9b844;border-radius:1em;padding:.08em .55em .08em .12em;font-size:.95em;white-space:nowrap}
.lbl .lv em{font-style:normal;display:grid;place-items:center;min-width:1.55em;height:1.55em;border-radius:50%;background:linear-gradient(#ffd85a,#e8a020);color:#5a3000;text-shadow:none;font-size:.9em;padding:0 .2em}
.lbl .pb{width:5.5em;height:.55em;background:rgba(30,15,5,.75);border-radius:1em;margin-top:.2em;overflow:hidden;border:.08em solid rgba(255,220,120,.6)}
.lbl .pb i{display:block;height:100%;width:0;background:linear-gradient(#a8ff6a,#4cc020)}
.lbl .pb.m i{background:linear-gradient(#ffe27a,#f0a51c)}
.lbl .tap{margin-bottom:.25em;display:none;align-items:center;gap:.2em;background:#fff;color:#5a3000;border-radius:1em;padding:.1em .55em .1em .15em;font-size:.95em;box-shadow:0 .2em 0 #b07a30;animation:bob 1s ease-in-out infinite;text-shadow:none;cursor:pointer}
.lbl .tap .ico{width:1.5em;height:1.5em}
.lbl.idle .tap{display:flex}
.lbl .up{position:absolute;right:-1.1em;top:-.3em;width:1.5em;height:1.5em;border-radius:50%;background:#58c234;border:.12em solid #fff;display:none;place-items:center;font-size:.9em;animation:bob .8s ease-in-out infinite;box-shadow:0 .12em 0 #2a6a14}
.lbl.can .up{display:grid}
.lbl .sign{display:flex;flex-direction:column;align-items:center;background:linear-gradient(#f8e6bd,#e2c084);color:#4a2a12;border:.16em solid #6a4322;border-radius:.7em;padding:.25em .7em .35em;box-shadow:0 .25em 0 #3a2210;text-shadow:none;cursor:pointer;white-space:nowrap}
.lbl .sign .nm{font-family:Pirata;font-size:1.25em;line-height:1}
.lbl .sign .c{display:flex;align-items:center;gap:.2em;font-size:1em;color:#2a6a14}
.lbl .sign.no .c{color:#a03020}
.lbl .sign.ok{animation:bob 1s ease-in-out infinite;border-color:#2a8a14;box-shadow:0 .25em 0 #2a6a14,0 0 1em #aaff70}
.lbl .lock{background:rgba(40,22,10,.7);border-radius:1em;padding:.1em .6em;font-size:.95em;color:#eee}
.lbl .chestB{display:flex;align-items:center;gap:.2em;background:#fff;color:#5a3000;border-radius:1em;padding:.15em .6em .15em .2em;box-shadow:0 .2em 0 #b07a30,0 0 1em #ffe27a;animation:bob 1s ease-in-out infinite;cursor:pointer;text-shadow:none;white-space:nowrap}
.lbl .chestB .ico{width:2em;height:2em}
@keyframes bob{50%{transform:translateY(-.3em)}}
.ft{position:absolute;left:0;top:0;font-size:1.25em;color:#ffe27a;white-space:nowrap;pointer-events:none;animation:ft 1.1s ease-out forwards;display:flex;align-items:center;gap:.15em}
.ft .ico{width:1.3em;height:1.3em}
.ft.big{font-size:1.9em}.ft.pearl{color:#d6f2ff}.ft.green{color:#b6ff7a}
@keyframes ft{0%{opacity:0;transform:translate(-50%,0) scale(.6)}15%{opacity:1;transform:translate(-50%,-.6em) scale(1.15)}30%{transform:translate(-50%,-1em) scale(1)}100%{opacity:0;transform:translate(-50%,-3.2em)}}
.fly{position:absolute;left:0;top:0;width:2em;height:2em;pointer-events:none;will-change:transform}
#panel{position:absolute;left:50%;bottom:0;width:min(30em,100vw);transform:translate(-50%,110%);transition:transform .28s cubic-bezier(.2,.9,.3,1.2);padding:0 .5em calc(.5em + env(safe-area-inset-bottom))}
#panel.open{transform:translate(-50%,0)}
@media (orientation:landscape) and (min-aspect-ratio:13/10){#panel{left:auto;right:4.6em;bottom:.4em;transform:translateX(130%)}#panel.open{transform:none}}

.card{background:linear-gradient(#f8e6bd,#e8c98c);border:.22em solid #6a4322;border-radius:1.1em;box-shadow:0 .3em 0 #3a2210,0 .8em 1.6em rgba(0,0,0,.4),inset 0 0 0 .2em rgba(255,255,255,.35);color:#4a2a12;position:relative}
.card .x{position:absolute;right:-.5em;top:-.6em;width:2.3em;height:2.3em;border-radius:50%;background:linear-gradient(#ff7a5a,#d8402a);border:.15em solid #fff;color:#fff;display:grid;place-items:center;font-size:1em;cursor:pointer;box-shadow:0 .15em 0 #8a2010;z-index:2}
.ph{display:flex;gap:.6em;align-items:center;padding:.6em 2.2em .3em .7em}
.ph .bi{width:4.6em;height:4.6em;flex:none;border-radius:.9em;background:radial-gradient(circle at 50% 40%,#fff6dc,#d8b070);border:.15em solid #6a4322;display:grid;place-items:center;margin-top:-1.6em;box-shadow:0 .2em 0 #3a2210}
.ph .bi img{width:4.3em;height:4.3em;object-fit:contain}
.ph h2{margin:0;font-family:Pirata;font-weight:normal;font-size:1.75em;line-height:1;color:#4a2208}
.ph .d{font-size:.85em;color:#8a5a2a}
.ph .lvb{margin-left:auto;text-align:center;background:#6a4322;color:#ffe27a;border-radius:.7em;padding:.15em .6em;font-size:1.25em;line-height:1.05}
.ph .lvb small{display:block;font-size:.55em;color:#e8c98c}
.stats{display:flex;gap:.4em;padding:.25em .7em}
.stat{flex:1;background:rgba(106,67,34,.14);border-radius:.6em;padding:.25em .4em;text-align:center;line-height:1.1}
.stat small{display:block;font-size:.72em;color:#8a5a2a}
.stat b{font-weight:normal;font-size:1.1em;color:#3a6a10}
.ms{padding:.25em .7em}
.ms .row{display:flex;justify-content:space-between;font-size:.8em;color:#8a5a2a}
.ms .bar{height:.75em;background:#c9a56a;border-radius:1em;overflow:hidden;box-shadow:inset 0 .1em .15em rgba(0,0,0,.25)}
.ms .bar i{display:block;height:100%;background:linear-gradient(#c88aff,#8a4ad8)}
.acts{display:flex;gap:.45em;padding:.45em .7em .7em;align-items:stretch}
.acts .btn{flex:1;flex-direction:column;gap:0;line-height:1.1;padding:.35em .5em;font-size:1.05em}
.acts .btn small{display:flex;align-items:center;gap:.15em;font-size:.95em}
.seg{display:flex;flex-direction:column;gap:.25em}
.seg span{background:#6a4322;color:#e8c98c;border-radius:.5em;padding:.15em .5em;font-size:.8em;text-align:center;cursor:pointer}
.seg span.on{background:#e9a020;color:#fff}
.mgr{display:flex;align-items:center;gap:.5em;margin:0 .7em;padding:.35em .5em;background:rgba(106,67,34,.14);border-radius:.7em;font-size:.9em}
.mgr img{width:2.4em;height:2.4em;border-radius:50%;background:#d8b070;object-fit:cover}
.mgr .t{flex:1;line-height:1.1}.mgr .t small{display:block;color:#8a5a2a;font-size:.8em}
#modal{position:absolute;inset:0;z-index:3;display:none;place-items:center;background:rgba(10,20,30,.6);pointer-events:auto}
#modal.open{display:grid;animation:fade .2s}
@keyframes fade{from{opacity:0}}
#modal .card{width:min(28em,94vw);max-height:92vh;overflow:auto;animation:popin .32s cubic-bezier(.2,1.4,.4,1)}
@keyframes popin{from{transform:scale(.6);opacity:0}}
.mt{font-family:Pirata;font-size:2.1em;text-align:center;color:#4a2208;padding:.35em .5em 0;line-height:1}
.mb{padding:.3em 1em 1em;text-align:center}
.mb p{margin:.4em 0;line-height:1.25}
.big{font-size:2em;color:#3a6a10}
.ribbon{position:relative;margin:-.2em auto .2em;width:max-content;padding:.25em 1.6em;background:linear-gradient(#e8503a,#b02a1a);color:#fff;font-family:Pirata;font-size:1.6em;box-shadow:0 .15em 0 #6a1408;border-radius:.2em}
.mrow{display:flex;align-items:center;gap:.5em;background:rgba(106,67,34,.12);border-radius:.7em;padding:.4em .5em;margin:.35em 0;text-align:left}
.mrow .t{flex:1;line-height:1.15}.mrow .bar{height:.5em;background:#c9a56a;border-radius:1em;overflow:hidden;margin-top:.2em}.mrow .bar i{display:block;height:100%;background:linear-gradient(#ffd85a,#e8a020)}
.days{display:grid;grid-template-columns:repeat(7,1fr);gap:.3em;margin:.4em 0}
.day{background:rgba(106,67,34,.15);border-radius:.6em;padding:.25em 0;font-size:.75em;line-height:1.2;position:relative}
.day img{width:2em;height:2em}
.day.got{background:#9ad86a;color:#2a5a10}.day.now{background:#ffd85a;box-shadow:0 0 0 .15em #e8a020;animation:pulse 1.2s infinite}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.45em;margin:.5em 0}
.cc{position:relative;border-radius:.7em;overflow:hidden;border:.18em solid var(--rc);background:#2a3a40;aspect-ratio:1;box-shadow:0 .15em 0 rgba(0,0,0,.3)}
.cc img{width:100%;height:100%;object-fit:cover;display:block}
.cc.no img{filter:brightness(0) opacity(.45)}
.cc .n{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(transparent,rgba(0,0,0,.8));color:#fff;font-size:.62em;padding:.6em .2em .15em;line-height:1.05}
.cc .l{position:absolute;top:.15em;right:.2em;background:var(--rc);color:#222;border-radius:.5em;padding:0 .35em;font-size:.7em}
.cc.no .n{color:#bbb}
#reveal{position:absolute;inset:0;display:none;place-items:center;background:radial-gradient(circle,rgba(30,20,60,.75),rgba(5,5,15,.92));pointer-events:auto;z-index:5}
#reveal.open{display:grid}
#reveal .rays{position:absolute;width:150vmax;height:150vmax;left:50%;top:50%;margin:-75vmax;background:repeating-conic-gradient(from 0deg,var(--rc) 0 8deg,transparent 8deg 22deg);opacity:.25;animation:spin 14s linear infinite;-webkit-mask:radial-gradient(circle,#000 0,transparent 55%);mask:radial-gradient(circle,#000 0,transparent 55%)}
@keyframes spin{to{transform:rotate(360deg)}}
#reveal .rc{position:relative;width:min(15em,60vw);text-align:center;animation:flip .7s cubic-bezier(.2,1.3,.4,1)}
#reveal .rc .cc{width:100%;border-width:.3em;box-shadow:0 0 2.5em var(--rc)}
#reveal .rr{font-size:1.2em;color:var(--rc);margin-top:.4em;letter-spacing:.1em}
#reveal .rn{font-family:Pirata;font-size:2.2em;line-height:1}
#reveal .rt{color:#cfe;margin:.2em 0 .8em}
@keyframes flip{0%{transform:rotateY(90deg) scale(.4)}100%{transform:none}}
#toast{position:absolute;left:50%;top:22%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:.4em}
.tst{background:linear-gradient(#4a2e18f0,#2e1a0cf0);border:.15em solid #e9b844;border-radius:1em;padding:.4em 1.1em;font-size:1.15em;animation:tst 2.6s forwards;white-space:nowrap;box-shadow:0 .4em 1em rgba(0,0,0,.35)}
.tst.ms{background:linear-gradient(#8a4ad8f0,#5a2aa8f0);font-size:1.25em}
@keyframes tst{0%{opacity:0;transform:translateY(1em) scale(.8)}10%{opacity:1;transform:none}85%{opacity:1}100%{opacity:0;transform:translateY(-1em)}}
#hand{position:absolute;left:0;top:0;width:3.4em;height:3.4em;display:none;z-index:4;filter:drop-shadow(0 .2em .2em rgba(0,0,0,.4));animation:tapH 1s ease-in-out infinite}
@keyframes tapH{0%,100%{margin:0}50%{margin:.6em 0 0 .4em}}
#rflash{position:absolute;inset:0;pointer-events:none;opacity:0}
#rflash.go{animation:rfl .28s ease-out both}#rflash.r{background:radial-gradient(ellipse at center,transparent 35%,rgba(220,30,10,.55))}#rflash.w{background:radial-gradient(ellipse at center,rgba(255,250,220,.4),rgba(255,240,200,.15) 70%)}#rflash.o{background:radial-gradient(ellipse at center,rgba(255,180,80,.18),transparent 70%)}
@keyframes rfl{0%{opacity:1}100%{opacity:0}}
.loot{position:relative;overflow:hidden}.loot>*{position:relative}
.loot .lrays{position:absolute;left:50%;top:5.5em;width:26em;height:26em;margin:-13em;background:repeating-conic-gradient(from 0deg,rgba(255,210,80,.55) 0 9deg,transparent 9deg 24deg);animation:spin 12s linear infinite;-webkit-mask:radial-gradient(circle,#000 0,transparent 60%);mask:radial-gradient(circle,#000 0,transparent 60%);pointer-events:none}
.lchest{width:6.4em;margin:-.2em 0 -.5em;animation:chest .9s cubic-bezier(.3,1.6,.5,1) both}
@keyframes chest{0%{transform:scale(.2) rotate(-25deg);opacity:0}60%{transform:scale(1.15) rotate(6deg);opacity:1}80%{transform:scale(.95) rotate(-3deg)}100%{transform:none}}
.lstars{font-size:3em;line-height:1;margin:-.15em 0 .05em;letter-spacing:.08em}.lstars b{display:inline-block;color:#7a5a3a;opacity:.35;animation:star .45s cubic-bezier(.3,1.8,.5,1) both}
.lstars b.on{color:#ffd23a;opacity:1;text-shadow:0 .06em 0 #a86a08,0 0 .4em #ffe27a}
@keyframes star{0%{transform:scale(2.6) rotate(-40deg);opacity:0}100%{transform:none}}
.lstat{font-size:.85em;color:#6a4a2a;margin-top:.2em}.lstat b{color:#2e7a10}
#adwarn{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);z-index:8;opacity:1;background:rgba(30,15,5,.94);border:.18em solid #e9b844;border-radius:1em;padding:.7em 1.6em;text-align:center;color:#fff;pointer-events:none}
#adwarn{font-size:1.25em}#adwarn div{font-family:Pirata;font-size:1.9em}#adwarn b{color:#ffd23a}#adwarn small{opacity:.8}
#adwarn.tick div{animation:bump .4s}
#raidUI{position:absolute;inset:0;display:none;pointer-events:auto}
#raidUI.open{display:block}
body.raid #top,body.raid #side,body.raid #sideR,body.raid #quest,body.raid #labels,body.raid #rumP,body.raid #hand{display:none!important}
.hp{position:absolute;top:calc(1em + env(safe-area-inset-top));width:min(16em,42vw);background:rgba(30,15,5,.8);border:.15em solid #e9b844;border-radius:.8em;padding:.25em .5em}
.hp .bar{height:.9em;border-radius:1em;background:#3a1a0a;overflow:hidden;margin-top:.15em}.hp .bar i{display:block;height:100%;transition:width .35s;background:linear-gradient(#ff8a5a,#d83a1a)}
.hp.me .bar i{background:linear-gradient(#a8ff6a,#4cc020)}
#tbar{position:absolute;left:50%;bottom:calc(7.5em + env(safe-area-inset-bottom));transform:translateX(-50%);width:min(26em,88vw);height:2.2em;border-radius:1.2em;background:#3a2210;border:.2em solid #e9b844;overflow:hidden;box-shadow:0 .3em 0 #1d0f05}
#tbar .z{position:absolute;top:0;bottom:0;background:rgba(120,230,80,.75)}
#tbar .zc{position:absolute;top:0;bottom:0;background:#ffd23a}
#tbar .mist{position:absolute;inset:0;display:grid;place-items:center;background:rgba(190,220,235,.82);color:#fff;font-size:.95em;letter-spacing:.06em;opacity:0;transition:opacity .2s}#tbar.misted .mist{opacity:1}
.lbl.jack .chestB{background:linear-gradient(#ffe27a,#e9a21c);color:#5a2a00;box-shadow:0 0 18px #ffd23a;animation:fleeP .45s infinite alternate}.hp .flee{color:#ffe27a;margin-left:.3em}.hp .flee.hot{color:#ff6a4a;animation:fleeP .5s infinite alternate}@keyframes fleeP{to{opacity:.45}}
.hp .boss{background:#2aa070;color:#fff;border-radius:.4em;padding:0 .35em;font-size:.8em}
#tbar .nd{position:absolute;top:-.2em;bottom:-.2em;width:.45em;margin-left:-.22em;background:#fff;border-radius:.3em;box-shadow:0 0 .5em #fff}
#fire{position:absolute;left:50%;bottom:calc(1.4em + env(safe-area-inset-bottom));transform:translateX(-50%);font-size:1.6em;padding:.35em 1.6em}
#rmsg{position:absolute;left:50%;top:26%;transform:translateX(-50%);font-family:Pirata;font-size:min(2.6em,7.5vw);width:min(16em,88vw);text-align:center;line-height:1.05}
.pop{animation:popt .6s ease-out}
@keyframes popt{0%{transform:translateX(-50%) scale(.3);opacity:0}40%{transform:translateX(-50%) scale(1.2);opacity:1}100%{transform:translateX(-50%) scale(1)}}
#boot{position:fixed;inset:0;z-index:20;display:grid;place-items:center;background:radial-gradient(circle at 50% 40%,#2a5a7a,#0b2a44);transition:opacity .5s;color:#fff;font-family:Lilita,system-ui}
#boot h1{font-family:Pirata;font-weight:normal;font-size:min(14vw,5em);margin:0;color:#ffd85a;text-shadow:0 .06em 0 #6a3a00,0 0 .4em rgba(0,0,0,.5);text-align:center;line-height:.9}
#boot .lb{width:min(20em,70vw);height:.9em;border-radius:1em;background:rgba(0,0,0,.4);border:.15em solid #e9b844;overflow:hidden;margin:1.2em auto 0}
#boot .lb i{display:block;height:100%;width:5%;background:linear-gradient(#ffe27a,#f0a51c);transition:width .3s}
.set{display:flex;justify-content:space-between;align-items:center;margin:.5em 0;font-size:1.1em}
.tg{width:3.2em;height:1.7em;border-radius:1em;background:#9a8a7a;position:relative;cursor:pointer;transition:background .2s}
.tg::after{content:'';position:absolute;left:.2em;top:.2em;width:1.3em;height:1.3em;border-radius:50%;background:#fff;transition:left .2s}
.tg.on{background:#58c234}.tg.on::after{left:1.7em}
@media (orientation:portrait){#side{top:auto;bottom:calc(5.8em + env(safe-area-inset-bottom));transform:none;flex-direction:row;left:.6em}#sideR{top:auto;bottom:calc(5.8em + env(safe-area-inset-bottom));transform:none;flex-direction:row;right:.6em}
 .sb{width:3.9em;height:3.9em}.sb img{width:2.9em;height:2.9em}#goldP{min-width:8em}}
#evB{position:absolute;top:calc(4.4em + env(safe-area-inset-top));left:50%;transform:translate(-50%,-14em);display:flex;gap:.55em;align-items:center;background:linear-gradient(#5f3214,#3a1c0a);border:.18em solid #e9b844;border-radius:1em;padding:.35em 1em .5em .55em;box-shadow:0 .25em 0 #1d0f05,0 .6em 1.4em rgba(0,0,0,.4);transition:transform .45s cubic-bezier(.2,1.4,.4,1);min-width:16em;max-width:92vw;pointer-events:none}
#evB.show{transform:translate(-50%,0)}
#evB .ei{font-size:2.1em;line-height:1;animation:pulse 1.2s infinite}
#evB .et{flex:1;text-align:left}#evB .et b{display:block;font-family:Pirata;font-weight:normal;font-size:1.35em;color:#ffd23a;line-height:1.05}#evB .et small{display:block;font-size:.85em;color:#fff3d6}
#evB .eb{height:.42em;background:rgba(0,0,0,.45);border-radius:.3em;margin-top:.3em;overflow:hidden}#evB .eb i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#ffd23a,#ff8a3a);transition:width .2s linear}
#evB.kraken{border-color:#c77dff}#evB.kraken .et b{color:#e3b8ff}#evB.storm{border-color:#9fc8ff}#evB.storm .et b{color:#cfe4ff}#evB.bounty{border-color:#7dffc0}#evB.bounty .et b{color:#9dffd0}#evB.trader{border-color:#8fe8ff}
#evB.trader .eb,#evB.bounty .eb{display:none}
body.raid #evB{display:none}
#storm{position:fixed;inset:0;pointer-events:none;opacity:0;transition:opacity 1.4s;background:linear-gradient(180deg,rgba(16,24,46,.58),rgba(18,30,50,.3));overflow:hidden}
#storm.on{opacity:1}
#storm::before,#storm::after{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='160'%3E%3Cg stroke='%23e2ecff' stroke-opacity='.6' stroke-width='1.6' stroke-linecap='round'%3E%3Cpath d='M10 0l-6 26M50 40l-6 26M90 90l-6 26M30 110l-6 26M70 8l-5 22M112 60l-6 26M20 70l-5 22M100 128l-6 24'/%3E%3C/g%3E%3C/svg%3E");animation:rain .42s linear infinite}
#storm::after{background-size:180px 240px;opacity:.6;animation-duration:.6s}
@keyframes rain{to{background-position:-37px 160px}}
#storm.fl{animation:ltn .7s ease-out}
@keyframes ltn{0%{background-color:rgba(255,255,255,0)}7%{background-color:rgba(230,240,255,.6)}15%{background-color:rgba(255,255,255,.04)}24%{background-color:rgba(230,240,255,.42)}100%{background-color:rgba(255,255,255,0)}}
#bRaid.bounty{border-color:#7dffc0;box-shadow:0 .28em 0 #1d0f05,0 0 1.2em #7dffc0;animation:pulse 1s infinite}
#modal .card.wide{width:min(34em,96vw)}
.fleet{display:grid;grid-template-columns:repeat(3,1fr);gap:.5em;margin:.5em 0}
.fc{background:#fff6e0;border:.15em solid #b08040;border-radius:.8em;padding:.3em .3em .5em;display:flex;flex-direction:column;align-items:center;gap:.2em}
.fc img{width:100%;aspect-ratio:1;object-fit:contain;background:radial-gradient(circle at 50% 62%,#a6e2f6,#3a8ab8);border-radius:.6em}
.fc b{font-family:Pirata;font-weight:normal;font-size:1.15em;color:#4a2208;text-shadow:none;-webkit-text-stroke:0}
.fc small{font-size:.72em;color:#7a4a1a;line-height:1.2}
.fc .btn{font-size:.74em;padding:.4em .5em;white-space:nowrap;margin-top:auto}
.fc.act{border-color:#e9b844;box-shadow:0 0 0 .15em #e9b844,0 0 1em rgba(233,184,68,.6)}
.fc.lk img{filter:grayscale(.85) brightness(.75)}
.fnext{display:flex;align-items:center;gap:.6em;background:rgba(80,40,10,.12);border-radius:.8em;padding:.4em .7em;text-align:left;font-size:.9em}
.fnext img{width:3.8em;height:3.8em;object-fit:contain}
@media (orientation:portrait){#evB{top:calc(6.9em + env(safe-area-inset-top))}#sideR{flex-direction:column-reverse}}
`});var Et,Io,Jh=Qe(()=>{pi();Et=Object.fromEntries(st.map((s,e)=>[s.id,e])),Io=class{constructor(e,t=Date.now()){this.S=e,this.ev={},this.frenzy=0,this.frenzyM=1,st.forEach(n=>{e.b[n.id]||(e.b[n.id]={lv:0,m:!1,p:0,run:!1})}),e.last||(e.last=t),e.q===0&&!e.b.dock.lv&&!e.legends&&(e.b.dock.lv=1,e.gold=0),e.legends&&!e.b.dock.lv&&(e.b.dock.lv=1)}on(e,t){(this.ev[e]=this.ev[e]||[]).push(t)}emit(e,t,n){(this.ev[e]||[]).forEach(i=>i(t,n))}crewFx(e,t){let n=0;for(let i of ls){let r=this.S.crew[i.id]||0;if(!r)continue;let a=1+(r-1)*.5;i.fx[e]!==void 0&&(e!=="b"||i.fx.b===t)&&(n+=(e==="b"?i.fx.m:i.fx[e])*a)}return n}starMult(){return 1+this.S.stars*.1}global(){return this.starMult()*(1+this.crewFx("all"))*(this.S.rum>0?2:1)*(this.frenzy>0?this.frenzyM:1)}msCount(e){let t=0;for(let n of Wr)e>=n&&t++;return e>=500&&(t+=Math.floor((e-400)/100)),t}nextMs(e){for(let t of Wr)if(e<t)return t;return(Math.floor(e/100)+1)*100}cycle(e){return st[Et[e]].time/(1+this.crewFx("speed"))/(this.S.b[e].lv>=100?2:1)}payout(e){let t=st[Et[e]],n=this.S.b[e];return t.inc*n.lv*Math.pow(2,this.msCount(n.lv))*(1+this.crewFx("b",e))*this.global()}perSec(e){return this.S.b[e].lv?this.payout(e)/this.cycle(e):0}incomeAll(e=!0){let t=0;for(let n of st){let i=this.S.b[n.id];i.lv&&(!e||i.m)&&(t+=this.perSec(n.id))}return t}potential(){return Math.max(this.incomeAll(!1),1)}cost(e,t=1){let n=st[Et[e]],i=this.S.b[e].lv,r=n.grow;return n.cost*Math.pow(r,i)*(Math.pow(r,t)-1)/(r-1)}maxBuy(e){let t=st[Et[e]],n=this.S.b[e].lv,i=t.grow,r=t.cost*Math.pow(i,n);return Math.max(0,Math.floor(Math.log(this.S.gold*(i-1)/r+1)/Math.log(i)+1e-9))}buyN(e,t){return t==="max"?Math.max(1,this.maxBuy(e)):t==="next"?Math.max(1,this.nextMs(this.S.b[e].lv)-this.S.b[e].lv):t}unlocked(e){if(st[Et[e]].zone===2&&!this.S.bridge)return!1;let n=Et[e];return n===0||this.S.b[st[n-1].id].lv>0}addGold(e,t){this.S.gold+=e,this.S.life+=e,this.S.total+=e,this.mis("earn",e),t&&this.emit("gold",e,t)}buy(e,t){if(!this.unlocked(e)||t<1)return!1;let n=this.cost(e,t);if(n>this.S.gold+1e-6)return!1;let i=this.S.b[e],r=i.lv?Xr(i.lv):0,a=this.msCount(i.lv);this.S.gold-=n,i.lv+=t,this.S.st.upg+=t,this.mis("upg",t);let o=Xr(i.lv),l=this.msCount(i.lv);return this.emit("buy",e,{n:t,built:r===0,tier:o!==r?o:0,ms:l>a}),i.lv===t&&!i.m&&(i.run=!1),this.checkQuest(),!0}hire(e){let t=this.S.b[e],n=st[Et[e]];return t.m||!t.lv||this.S.gold<n.mgr?!1:(this.S.gold-=n.mgr,t.m=!0,t.run=!0,this.emit("hire",e),this.checkQuest(),!0)}tap(e){let t=this.S.b[e];return t.lv?(this.S.st.taps++,this.mis("collect",1),t.m?(t.p=Math.min(.999,t.p+.06),this.checkQuest(),"hurry"):t.run?(t.p=Math.min(.999,t.p+.15),this.checkQuest(),"hurry"):(t.run=!0,t.p=0,this.checkQuest(),"start")):null}buyBridge(){return this.S.bridge||this.S.gold<os?!1:(this.S.gold-=os,this.S.bridge=!0,this.emit("bridge"),this.checkQuest(),!0)}update(e){let t=this.S;t.rum>0&&(t.rum=Math.max(0,t.rum-e)),this.frenzy>0&&(this.frenzy=Math.max(0,this.frenzy-e));for(let n of st){let i=t.b[n.id];if(!i.lv||!i.run)continue;let r=this.cycle(n.id);if(i.p+=e/r,i.p>=1){let a=i.m?Math.floor(i.p):1,o=this.payout(n.id)*a;i.p=i.m?i.p-a:0,i.m||(i.run=!1),this.addGold(o,n.id),(n.id==="dock"||!i.m)&&this.qtick("collect",n.id)}}}offline(e){let t=this.S,n=Math.max(0,(e-t.last)/1e3);if(t.last=e,n<60)return null;let i=(2+this.crewFx("offline"))*3600,r=Math.min(n,i),a=t.rum;t.rum=0;let o=this.frenzy;this.frenzy=0;let l=this.incomeAll(!0);return t.rum=Math.max(0,a-n),this.frenzy=o,l<=0?null:{away:n,t:r,cap:i,gold:l*r}}quest(){return _f[this.S.q]||null}qProgress(){let e=this.quest();if(!e)return[0,1];let t=this.S;switch(e.k){case"level":return[Math.min(e.n,t.b[e.b].lv),e.n];case"mgr":return[t.b[e.b].m?1:0,1];case"bridge":return[t.bridge?1:0,1];default:return[Math.min(e.n,t.qn),e.n]}}qtick(e,t){let n=this.quest();n&&n.k===e&&(!n.b||n.b===t)&&(this.S.qn++,this.checkQuest())}checkQuest(){let[e,t]=this.qProgress(),n=this.quest();n&&e>=t&&!this.qDone&&(this.qDone=!0,this.emit("questDone",n))}claimQuest(){let e=this.quest();if(!e)return null;let[t,n]=this.qProgress();if(t<n)return null;let i=this.reward(e.r);return this.S.q++,this.S.qn=0,this.qDone=!1,this.emit("quest",e,i),this.checkQuest(),i}reward(e){let t={};return e.g&&(t.g=Math.max(e.g,this.potential()*(e.g>=100?30:0)),e.g<100&&(t.g=e.g),this.addGold(t.g)),e.p&&(t.p=e.p,this.S.pearls+=e.p),e.m&&(t.g=this.potential()*e.m*60,this.addGold(t.g)),t}day(e){let t=this.S;if(t.mis.day!==e){let n=bf.filter(a=>(a.k!=="raid"||t.b.shipyard.lv>0)&&(a.k!=="pull"||t.q>=7)),i=[],r=n.slice();for(;i.length<3&&r.length;)i.push(r.splice(Math.floor(Math.random()*r.length),1)[0]);t.mis={day:e,bonus:!1,list:i.map(a=>({k:a.k,t:a.t,n:Math.ceil(a.f(this.incomeAll(!1)||1)),c:0,done:!1}))}}return t.mis}mis(e,t){let n=this.S.mis.list;if(n)for(let i of n)i.k===e&&!i.done&&(i.c=Math.min(i.n,i.c+t),i.c>=i.n&&!i.claimed&&(i.done=!0,this.emit("mission",i)))}claimMission(e){let t=this.S.mis.list[e];return!t||!t.done||t.claimed?0:(t.claimed=!0,this.S.pearls+=10,10)}claimBonus(){let e=this.S.mis;return e.bonus||!e.list.every(t=>t.claimed)?0:(e.bonus=!0,this.S.pearls+=25,25)}streakState(e,t){let n=this.S.streak;if(n.claimed===e)return null;let i=n.last===t?n.n%7:0;return{idx:i,r:To[i]}}claimStreak(e,t){let n=this.streakState(e,t);if(!n)return null;let i=this.S.streak;return i.n=n.idx+1,i.last=e,i.claimed=e,this.reward({p:n.r.p,m:n.r.g})}pull(e=Math.random){if(this.S.pearls<di)return null;this.S.pearls-=di;let t=e()*100,n=0;for(;n<ki.length&&!(t<ki[n].w);n++)t-=ki[n].w;n=Math.min(n,3),this.S.st.pulls===0&&(n=1);let i=ls.filter(o=>o.r===n),r=i[Math.floor(e()*i.length)],a=(this.S.crew[r.id]||0)>0;return this.S.crew[r.id]=(this.S.crew[r.id]||0)+1,this.S.st.pulls++,this.mis("pull",1),this.qtick("pull"),this.checkQuest(),{c:r,dup:a,lv:this.S.crew[r.id]}}starsFor(e){return Math.floor(Math.sqrt(e/1e8))}pendingStars(){return Math.max(0,this.starsFor(this.S.life+(this.S.lifeBank||0))-this.S.stars)}prestige(){let e=this.pendingStars();if(e<1)return 0;let t=this.S;return t.lifeBank=(t.lifeBank||0)+t.life,t.stars+=e,t.life=0,t.gold=0,t.bridge=!1,t.legends++,t.rum=0,st.forEach(n=>t.b[n.id]={lv:0,m:!1,p:0,run:!1}),t.b.dock.lv=1,this.qtick("prestige"),this.emit("prestige",e),e}}});var Py,Iy,Xt,Rf,Ly,$,sr=Qe(()=>{Zs();Py=["coin0","coin1","click0","click1","deny0","unlock0","confirm0","open0","close0","pop0","creak0","door0","latch0","page0","cloth0","chop0","wood0","wood1","metal0","plate0","drop0","glass0","stone0"],Iy={click:["click0",.5],select:["click1",.45],deny:["deny0",.5],unlock:["unlock0",.5],confirm:["confirm0",.5],open:["open0",.45],close:["close0",.4],pop:["pop0",.4],creak:["creak0",.45],door:["door0",.5],latch:["latch0",.5],page:["page0",.5],cloth:["cloth0",.5],chop:["chop0",.45],wood:["wood",.55],metal:["metal0",.45],drop:["drop0",.4],glass:["glass0",.4],stone:["stone0",.5]},Xt=s=>440*Math.pow(2,(s-69)/12),Rf=[[7,null,7,7,5,3],[2,null,-2,2,3,5],[7,null,7,7,9,10],[12,null,10,9,null,7],[7,5,3,5,null,7],[10,9,7,5,null,2],[3,null,5,7,null,3],[2,null,-1,0,null,null]],Ly=[[0,3,7],[-2,2,5],[0,3,7],[-2,2,5],[0,3,7],[-2,2,5],[-7,-3,0],[-5,-1,2]],$={ctx:null,sdkPaused:!1,step:0,nextT:0,track:"main",buf:{},last:{},init(){if(this.ctx){this.ctx.state==="suspended"&&!this.sdkPaused&&!document.hidden&&this.ctx.resume();return}let s=window.AudioContext||window.webkitAudioContext;if(!s)return;let e;try{e=this.ctx=new s}catch{return}this.master=e.createGain(),this.master.connect(e.destination),this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-12,this.comp.ratio.value=4,this.comp.connect(this.master),this.music=e.createGain(),this.sfxG=e.createGain(),this.amb=e.createGain(),this.music.connect(this.comp),this.sfxG.connect(this.comp),this.amb.connect(this.comp),this.rev=e.createConvolver(),this.rev.buffer=this.impulse(2.4);let t=e.createGain();t.gain.value=.22,this.rev.connect(t),t.connect(this.comp);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let i=this.noiseBuf.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1;Py.forEach(r=>fetch("assets/sfx/"+r+".mp3").then(a=>a.ok?a.arrayBuffer():Promise.reject()).then(a=>new Promise((o,l)=>e.decodeAudioData(a,o,l))).then(a=>{this.buf[r]=a}).catch(()=>{})),this.surf(),this.apply(),this.nextT=e.currentTime+.1,this.timer=setInterval(()=>this.schedule(),40),(this.sdkPaused||document.hidden)&&e.suspend()},surf(){let s=this.ctx,e=s.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let t=s.createBiquadFilter();t.type="lowpass",t.frequency.value=500,t.Q.value=.3;let n=s.createGain();n.gain.value=.05;let i=s.createOscillator(),r=s.createGain();i.frequency.value=.11,r.gain.value=.035,i.connect(r),r.connect(n.gain);let a=s.createOscillator(),o=s.createGain();a.frequency.value=.07,o.gain.value=260,a.connect(o),o.connect(t.frequency),e.connect(t),t.connect(n),n.connect(this.amb),e.start(),i.start(),a.start()},apply(){if(!this.ctx)return;let s=Ks.data,e=this.ctx.currentTime;this.master.gain.setTargetAtTime(ut.muted||this.sdkPaused?0:1,e,.03),this.music.gain.setTargetAtTime(s.music*.32,e,.08),this.sfxG.gain.setTargetAtTime(s.sfx*.9,e,.05),this.amb.gain.setTargetAtTime(Math.max(s.sfx,s.music)*.9,e,.1)},pause(s){if(this.sdkPaused=s,!!this.ctx)try{s?(this.master.gain.value=0,this.ctx.suspend()):(this.ctx.resume(),this.apply())}catch{}},impulse(s){let e=this.ctx,t=e.sampleRate*s,n=e.createBuffer(2,t,e.sampleRate);for(let i=0;i<2;i++){let r=n.getChannelData(i);for(let a=0;a<t;a++)r[a]=(Math.random()*2-1)*Math.pow(1-a/t,3)}return n},env(s,e,t,n,i){s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(Math.max(n,2e-4),e+t),s.gain.exponentialRampToValueAtTime(1e-4,e+t+i)},osc(s,e,t,n,i,r,a=.1,o=.004){let l=this.ctx,c=l.createOscillator(),u=l.createGain();if(c.type=s,c.frequency.setValueAtTime(e,t),this.env(u,t,o,i,n),c.connect(u),u.connect(r),a){let h=l.createGain();h.gain.value=a,u.connect(h),h.connect(this.rev)}return c.start(t),c.stop(t+o+n+.05),c},noise(s,e,t,n,i,r,a,o=.03,l=.003){let c=this.ctx,u=c.createBufferSource();u.buffer=this.noiseBuf,u.loop=!0;let h=c.createBiquadFilter();h.type=n,h.frequency.setValueAtTime(i,s),h.Q.value=r;let d=c.createGain();if(this.env(d,s,l,t,e),u.connect(h),h.connect(d),d.connect(a),o){let f=c.createGain();f.gain.value=o,d.connect(f),f.connect(this.rev)}return u.start(s,Math.random()),u.stop(s+l+e+.05),h},bell(s,e,t,n,i,r=.35){this.osc("sine",s,e,t,n,i,r,.002),this.osc("sine",s*2.76,e,t*.35,n*.3,i,r,.002)},pluck(s,e,t,n,i){let r=this.ctx,a=r.createOscillator(),o=r.createBiquadFilter(),l=r.createGain();a.type="sawtooth",a.frequency.value=s,o.type="lowpass",o.frequency.setValueAtTime(s*5,e),o.frequency.exponentialRampToValueAtTime(s*1.1,e+t*.7),this.env(l,e,.003,n,t),a.connect(o),o.connect(l),l.connect(i),a.start(e),a.stop(e+t+.05)},reed(s,e,t,n,i){let r=this.ctx,a=r.createGain(),o=r.createBiquadFilter();o.type="lowpass",o.frequency.value=Math.min(4200,s*6),o.Q.value=.8,a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(n,e+.03),a.gain.setTargetAtTime(n*.7,e+.05,.1),a.gain.setTargetAtTime(1e-4,e+t,.05),[-6,7].forEach(h=>{let d=r.createOscillator();d.type="sawtooth",d.frequency.value=s,d.detune.value=h,d.connect(o),d.start(e),d.stop(e+t+.4)});let l=r.createOscillator();l.type="square",l.frequency.value=s*.5;let c=r.createGain();c.gain.value=.25,l.connect(c),c.connect(o),l.start(e),l.stop(e+t+.4),o.connect(a),a.connect(i);let u=r.createGain();u.gain.value=.18,a.connect(u),u.connect(this.rev)},setTrack(s){this.track!==s&&(this.track=s,this.step=0)},schedule(){if(!this.ctx||this.sdkPaused||this.ctx.state!=="running"){this.ctx&&(this.nextT=Math.max(this.nextT,this.ctx.currentTime+.05));return}let s=this.track==="battle"?.2:.27;for(;this.nextT<this.ctx.currentTime+.15;)this.track!=="off"&&this.playStep(this.step,this.nextT,s),this.step++,this.nextT+=s},playStep(s,e,t){let n=this.music,i=s%6,r=Math.floor(s/6)%8,a=this.track==="battle",o=a?57:62,l=Ly[r].map(h=>h+o),c=i%3===1?t*.08:0;e+=c,i!==0?this.noise(e,.05,i===3?.05:.025,"highpass",7e3,1.5,n,.05):this.noise(e,.12,.06,"bandpass",5200,2,n,.1),a&&(i===0||i===3)&&this.osc("sine",120,e,.25,.55,n,0,.002).frequency.exponentialRampToValueAtTime(42,e+.2),a&&i===3&&this.noise(e,.14,.18,"bandpass",1600,1,n,.2),i===0&&this.pluck(Xt(l[0]-24),e,.5,.22,n),i===3&&this.pluck(Xt(l[0]-17),e,.4,.16,n),(i===1||i===2||i===4||i===5)&&l.forEach((h,d)=>this.pluck(Xt(h-12),e+d*.012,.22,i%3===1?.045:.03,n));let u=Rf[r][i];if(u!==null){let h=1;for(;i+h<6&&Rf[r][i+h]===null;)h++;this.reed(Xt(o+u),e,t*h*.92,a?.07:.055,n),Math.floor(s/48)%2===1&&this.bell(Xt(o+u+12),e,.4,.03,n)}},sample(s,e,t){let n=Object.keys(this.buf).filter(o=>o===s||o.replace(/\d+$/,"")===s);if(!n.length)return!1;let i=this.ctx,r=i.createBufferSource(),a=i.createGain();return r.buffer=this.buf[n[Math.floor(Math.random()*n.length)]],r.playbackRate.value=(t||1)*(.92+Math.random()*.16),a.gain.value=e,r.connect(a),a.connect(this.sfxG),r.start(),!0},play(s,e=1){if(!this.ctx||this.sdkPaused||this.ctx.state!=="running")return;let t=this.ctx.currentTime;if(this.last[s]&&t-this.last[s]<.045)return;this.last[s]=t;let n=t+.005,i=this.sfxG,r=Iy[s];switch(r&&this.sample(r[0],r[1]*Math.min(1.5,e)),s){case"coin":this.sample("coin",.35*e,1+Math.random()*.2),this.bell(Xt(91+Math.floor(Math.random()*3)*2),n,.25,.035*e,i,.2);break;case"coins":this.sample("coin",.5,.9),[0,4,7,12].forEach((a,o)=>this.bell(Xt(84+a),n+o*.05,.3,.04,i,.3));break;case"tap":this.noise(n,.05,.12,"bandpass",2400,2,i,0),this.osc("sine",660,n,.07,.05,i,0);break;case"buy":this.sample("wood",.35,1.3),[0,7,12].forEach((a,o)=>this.bell(Xt(79+a),n+o*.04,.25,.05,i,.2));break;case"build":this.sample("wood",.6,.9),this.sample("chop",.4),this.noise(n,.3,.25,"lowpass",900,.7,i,.1),[0,4,7,12,16].forEach((a,o)=>this.bell(Xt(72+a),n+.1+o*.06,.5,.06,i));break;case"tier":this.noise(n,.5,.25,"lowpass",1200,.7,i,.3),[0,4,7,12,16,19,24].forEach((a,o)=>this.bell(Xt(72+a),n+o*.055,.7,.07,i));break;case"milestone":[0,4,7,12].forEach((a,o)=>this.bell(Xt(79+a),n+o*.07,.6,.07,i));break;case"boom":{this.noise(n,.9,.8,"lowpass",1800,.6,i,.35).frequency.exponentialRampToValueAtTime(90,n+.8),this.osc("sine",85,n,.6,.6,i,.1).frequency.exponentialRampToValueAtTime(28,n+.5);break}case"splash":{this.noise(n,.6,.35*e,"bandpass",1200,.7,i,.2).frequency.exponentialRampToValueAtTime(400,n+.5),this.noise(n+.05,.4,.15*e,"highpass",4e3,.5,i,.1);break}case"crash":this.sample("wood",.8,.7),this.sample("plate",.3,.8),this.noise(n,.7,.5,"lowpass",1400,.6,i,.3);break;case"whoosh":{this.noise(n,.3,.15,"bandpass",600,1.4,i,.05).frequency.exponentialRampToValueAtTime(2400,n+.25);break}case"pearl":[0,5,9,12,17].forEach((a,o)=>this.bell(Xt(86+a),n+o*.04,.5,.045,i,.5));break;case"reveal":this.noise(n,1,.2,"highpass",3e3,.5,i,.5),[0,4,7,11,14,19].forEach((a,o)=>this.bell(Xt(74+a+e*2),n+o*.06,.8,.06,i,.5));break;case"win":[0,4,7,12,7,12,16,19].forEach((a,o)=>this.bell(Xt(72+a),n+o*.09,.7,.09,i));break;case"lose":[7,3,0,-5].forEach((a,o)=>this.reed(Xt(62+a),n+o*.2,.22,.05,i));break;case"gull":{let a=this.osc("sawtooth",1500,n,.35,.03,i,.3,.03);a.frequency.setValueAtTime(1700,n),a.frequency.exponentialRampToValueAtTime(1100,n+.3);break}case"bell":this.bell(Xt(81),n,1.2,.08,i,.6),this.bell(Xt(88),n+.25,1.2,.06,i,.6);break;case"tick":this.osc("square",1200,n,.03,.03,i,0);break;case"horn":[0,0,5].forEach((a,o)=>this.reed(Xt(50+a),n+o*.22,.2+o*.2,.08,i));break}}};document.addEventListener("visibilitychange",()=>{if($.ctx)try{document.hidden?($.master.gain.value=0,$.ctx.suspend()):$.sdkPaused||($.ctx.resume(),$.apply())}catch{}});["touchend","pointerup","keydown"].forEach(s=>document.addEventListener(s,()=>{if($.ctx&&$.ctx.state!=="running"&&!$.sdkPaused&&!document.hidden)try{$.ctx.resume()}catch{}},!0))});var ee,Bi,Pf,If,Pn,cs,Dy,Cf,Lo,Lf=Qe(()=>{wt();Af();pi();Jh();sr();ee=(s,e=document)=>e.querySelector(s),Bi=(s,e,t)=>{let n=document.createElement(s);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n},Pf="assets/ui/coin.webp",If="assets/ui/pearl.webp",Pn=(s="ico")=>`<img class="${s}" src="${Pf}" alt="">`,cs=(s="ico")=>`<img class="${s}" src="${If}" alt="">`,Dy={gear:'<svg viewBox="0 0 24 24"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm9.4 5.5l-2-.3a7.6 7.6 0 01-.7 1.7l1.2 1.6-1.9 1.9-1.6-1.2c-.5.3-1.1.6-1.7.7l-.3 2h-2.8l-.3-2a7.6 7.6 0 01-1.7-.7l-1.6 1.2-1.9-1.9 1.2-1.6a7.6 7.6 0 01-.7-1.7l-2-.3v-2.8l2-.3c.2-.6.4-1.2.7-1.7L4.1 6.1 6 4.2l1.6 1.2c.5-.3 1.1-.6 1.7-.7l.3-2h2.8l.3 2c.6.2 1.2.4 1.7.7L16 4.2l1.9 1.9-1.2 1.6c.3.5.6 1.1.7 1.7l2 .3z"/></svg>',full:'<svg viewBox="0 0 24 24"><path d="M3 3h7v2H5v5H3zm11 0h7v7h-2V5h-5zM3 14h2v5h5v2H3zm16 0h2v7h-7v-2h5z"/></svg>'},Cf=s=>ki[s].c,Lo=class{constructor(e,t,n,i){this.G=e,this.V=t,this.town=n,this.ctx=i,this.S=e.S,this.mode=1,this.sel=null,this.v3=new R,this.tops={};let r=document.createElement("style");r.textContent=Ef,document.head.appendChild(r);let a=this.root=Bi("div");a.id="ui",document.body.appendChild(a),a.innerHTML=`<div id="labels"></div>
    <div id="top"><div class="pill pe" id="goldP">${Pn()}<span id="gold" class="ts">0</span><span id="gps" class="ts">+0/s</span></div>
      <div class="pill pe" id="pearlP">${cs()}<span id="pearls" class="ts">0</span></div>
      <div class="pill pe" id="starP" style="display:none"><span class="star">\u2605</span><span id="stars" class="ts">0</span></div>
      <div id="topR"><div class="rbtn pe" id="bSet">${Dy.gear}</div></div></div>
    <div id="rumP" class="pill ts">\u{1F379} Rum Rush \xD72 <span id="rumT"></span></div>
    <div id="side">
      <div class="sb pe" id="bMis"><img src="assets/ui/chest.webp" alt=""><b class="ts">Missions</b><span class="bdg ts">!</span></div>
      <div class="sb pe" id="bCrew"><img src="assets/ui/pirate_3.webp" alt=""><b class="ts">Crew</b><span class="bdg ts">!</span></div>
      <div class="sb pe" id="bLeg"><img src="assets/ui/statue.webp" alt=""><b class="ts">Legend</b><span class="bdg ts">\u2605</span></div></div>
    <div id="sideR">
      <div class="sb pe lock" id="bRaid"><img src="assets/ui/enemy.webp" alt=""><b class="ts">Raid</b><span class="bdg ts">!</span></div>
      <div class="sb pe" id="bRum"><img src="assets/ui/barrels.webp" alt=""><b class="ts">Rum \xD72</b><span class="bdg ts">\u25B6</span></div></div>
    <div id="quest" class="pe hide"><div class="qi"><img src="assets/ui/chest.webp" alt=""></div><div class="qt"><small>CAPTAIN'S ORDERS</small><span id="qtx"></span><div class="qb"><i id="qbar"></i></div></div>
      <button class="btn gold" id="qClaim" style="display:none">Claim</button><span id="qRew" style="font-size:.9em;display:flex;align-items:center"></span></div>
    <div id="panel" class="pe"></div><div id="flyL"></div><div id="toast"></div>
    <svg id="hand" viewBox="0 0 64 64"><path d="M26 6c3 0 5 2 5 5v17l3-1c3-1 5 1 6 3l2-1c3-1 5 1 6 3l2-.5c3-.5 5 2 5 4v12c0 8-6 14-14 14h-6c-5 0-9-3-12-7L11 41c-2-3 0-6 3-6 2 0 3 1 5 3l2 2V11c0-3 2-5 5-5z" fill="#fff" stroke="#3a2210" stroke-width="3" stroke-linejoin="round"/></svg>
    <div id="modal"></div><div id="reveal"></div><div id="raidUI"></div>`,this.labels={};for(let o of st)this.mkLabel(o.id);this.mkBridgeLabel(),this.ship=Bi("div","lbl"),this.ship.innerHTML=`<div class="chestB pe">${Pn()}<span>Treasure!</span></div>`,this.ship.style.display="none",ee("#labels").appendChild(this.ship),this.ship.firstChild.addEventListener("pointerup",o=>{o.stopPropagation(),this.ctx.openChest()}),ee("#bSet").onclick=()=>this.settings(),ee("#bMis").onclick=()=>this.missions(),ee("#bCrew").onclick=()=>this.crew(),ee("#bLeg").onclick=()=>this.legend(),ee("#bRaid").onclick=()=>this.ctx.raid(),ee("#bRum").onclick=()=>this.rum(),ee("#qClaim").onclick=o=>{o.stopPropagation(),this.ctx.claimQuest()},ee("#modal").addEventListener("pointerdown",o=>{o.target.id==="modal"&&this.modalClose&&this.closeModal()}),this.resize(),window.addEventListener("resize",()=>this.resize()),this.tick=0,this.shown={}}resize(){let e=innerWidth,t=innerHeight,n=Math.max(12.5,Math.min(22,Math.min(t/46,e/27)));document.documentElement.style.setProperty("--fs",n+"px"),this.fs=n}proj(e,t,n){let i=this.v3.set(e,t,n).project(this.V.cam);return{x:(i.x+1)/2*innerWidth,y:(1-i.y)/2*innerHeight,ok:i.z<1&&i.z>-1}}mkLabel(e){let t=Bi("div","lbl");t.innerHTML=`<div class="tap pe">${Pn()}<span>Tap!</span></div><div class="lv ts"><em>1</em><span class="nm"></span><span class="up ts">\u25B2</span></div><div class="pb"><i></i></div>
      <div class="sign pe"><span class="nm"></span><span class="c">${Pn()}<b></b></span></div><div class="lock ts">\u{1F512} Locked</div>`,ee("#labels").appendChild(t);let n={L:t,em:ee("em",t),pb:ee(".pb",t),bar:ee(".pb i",t),sign:ee(".sign",t),cost:ee(".sign b",t),lock:ee(".lock",t),lv:ee(".lv",t),tap:ee(".tap",t)};ee(".lv .nm",t).textContent="",ee(".sign .nm",t).textContent=st[Et[e]].name;let i=r=>{r.stopPropagation(),this.ctx.tapBuilding(e,r.clientX,r.clientY)};n.tap.addEventListener("pointerup",i),n.sign.addEventListener("pointerup",i),this.labels[e]=n}mkBridgeLabel(){let e=Bi("div","lbl");e.innerHTML=`<div class="sign pe"><span class="nm">Bridge to Skull Isle</span><span class="c">${Pn()}<b>${dt(os)}</b></span></div>`,ee("#labels").appendChild(e),this.bridgeL={L:e,sign:ee(".sign",e)},e.style.display="none",this.bridgeL.sign.addEventListener("pointerup",t=>{t.stopPropagation(),this.ctx.tapBridge()})}topOf(e){let t=this.town.t[e];if(this.tops[e]&&this.tops[e][0]===t)return this.tops[e][1];let n=new Wt().setFromObject(this.town.g[e].userData.cur||this.town.g[e]),i=isFinite(n.max.y)?n.max.y:Ct[e].h+3;return this.tops[e]=[t,i],i}labelsUpdate(){let e=this.G,t=this.S,n=this.V.cam;for(let a of st){let o=this.labels[a.id],l=t.b[a.id],c=Ct[a.id];if(!(a.zone!==2||t.bridge)||!l.lv&&!e.unlocked(a.id)&&Et[a.id]>0&&!e.unlocked(st[Et[a.id]-1].id)){o.L.style.display="none";continue}let h=l.lv?this.topOf(a.id)+.6:c.h+3.2,d=this.proj(c.x,h,c.z);if(!d.ok||this.panelOpen&&this.sel===a.id&&!1){o.L.style.display="none";continue}o.L.style.display="";let f=n.position.distanceTo(this.v3.set(c.x,h,c.z)),g=Math.max(.62,Math.min(1.08,52/f));o.L.style.transform=`translate(${d.x}px,${d.y}px) translate(-50%,-100%) scale(${g})`;let x=e.unlocked(a.id),m=l.lv?"built":x?"sign":"lock";if(o.mode!==m&&(o.mode=m,o.lv.style.display=o.pb.style.display=m==="built"?"":"none",o.sign.style.display=m==="sign"?"":"none",o.lock.style.display=m==="lock"?"":"none"),m==="built"){o.lvN!==l.lv&&(o.lvN=l.lv,o.em.textContent=l.lv);let p=e.cycle(a.id);o.bar.style.width=(p<.35&&l.m?100:l.p*100)+"%",o.pb.classList.toggle("m",l.m),o.L.classList.toggle("idle",!l.m&&!l.run),o.L.classList.toggle("can",t.gold>=e.cost(a.id,1))}else if(m==="sign"){let p=e.cost(a.id,1);o.cost.textContent=dt(p),o.sign.classList.toggle("no",t.gold<p),o.sign.classList.toggle("ok",t.gold>=p),o.L.classList.remove("idle","can")}else o.L.classList.remove("idle","can"),o.lock.textContent="\u{1F512} "+(a.zone===2?"Build the bridge":"Build "+st[Et[a.id]-1].name)}let i=this.bridgeL;if(!t.bridge&&t.b.lighthouse.lv>0){let a=this.proj(29,3.2,-9);i.L.style.display=a.ok?"":"none",i.L.style.transform=`translate(${Math.max(i.hw=(i.sign.offsetWidth||160)/2+8,Math.min(innerWidth-i.hw,a.x))}px,${Math.max(110,a.y)}px) translate(-50%,-100%)`,i.sign.classList.toggle("ok",t.gold>=os),i.sign.classList.toggle("no",t.gold<os)}else i.L.style.display="none";let r=this.ctx.dockedShip&&this.ctx.dockedShip();if(r&&r.reward){let a=r.o.position,o=this.proj(a.x,7.5,a.z);this.ship.style.display=o.ok?"":"none";let l=!!r.reward.jack;this.ship._j!==l&&(this.ship._j=l,this.ship.querySelector("span").textContent=l?"JACKPOT!":"Treasure!",this.ship.classList.toggle("jack",l)),this.ship.style.transform=`translate(${o.x}px,${o.y}px) translate(-50%,-100%)`}else this.ship.style.display="none"}hud(){let e=this.S,t=this.G,n=dt(e.gold);n!==this._g&&(this._g=n,ee("#gold").textContent=n);let i=t.incomeAll(!0);ee("#gps").textContent=i>0?"+"+dt(i)+"/s":"tap buildings!",ee("#pearls").textContent=dt(e.pearls),ee("#starP").style.display=e.stars?"":"none",ee("#stars").textContent=e.stars,ee("#rumP").style.display=e.rum>0?"flex":"none",e.rum>0&&(ee("#rumT").textContent=Math.floor(e.rum/60)+":"+String(Math.floor(e.rum%60)).padStart(2,"0"));let r=e.mis.list||[];ee("#bMis").classList.toggle("on",r.some(h=>h.done&&!h.claimed)||!!t.streakState(this.ctx.d,this.ctx.yest)||r.length&&r.every(h=>h.claimed)&&!e.mis.bonus),ee("#bCrew").classList.toggle("on",e.pearls>=di),ee("#bCrew").style.display=e.q>=6||e.st.pulls?"":"none",ee("#bLeg").classList.toggle("on",t.pendingStars()>0),ee("#bLeg").style.display=e.b.vault.lv>0||e.stars?"":"none";let a=ee("#bRaid");a.style.display=e.b.shipyard.lv>0?"":"none";let o=this.ctx.raidCd();a.classList.toggle("on",o<=0);let l=ee(".cd",a);o>0?(l||(l=Bi("div","cd ts"),a.appendChild(l)),l.textContent=Math.ceil(o)+"s"):l&&l.remove(),a.classList.remove("lock"),ee("#bRum").style.display=e.q>=4?"":"none",ee("#bRum").classList.toggle("on",e.rum<=0);let c=t.quest(),u=ee("#quest");if(!c||this.panelOpen)u.classList.add("hide");else{u.classList.remove("hide");let[h,d]=t.qProgress();ee("#qtx").textContent=c.t+(d>1?` (${dt(h)}/${dt(d)})`:""),ee("#qbar").style.width=h/d*100+"%";let f=h>=d;ee("#qClaim").style.display=f?"":"none",ee("#qClaim").classList.toggle("glow",f),ee("#qRew").innerHTML=f?"":c.r.p?`${cs()}${c.r.p}`:`${Pn()}${dt(c.r.g)}`}}update(e){this.labelsUpdate(),this.tick+=e,this.tick>.1&&(this.tick=0,this.hud(),this.panelOpen&&this.panelRefresh(),this.handUpdate())}float(e,t,n,i=""){let r=Bi("div","ft ts "+i,n);r.style.left=e+"px",r.style.top=t+"px",ee("#flyL").appendChild(r),setTimeout(()=>r.remove(),1150)}floatAt(e,t,n){let i=this.proj(e.x,e.y,e.z);i.ok&&this.float(i.x,i.y,t,n)}fly(e,t,n=6,i="coin",r){let a=ee(i==="pearl"?"#pearlP .ico":"#goldP .ico").getBoundingClientRect(),o=a.left+a.width/2,l=a.top+a.height/2,c=n;for(let u=0;u<n;u++){let h=Bi("img","fly");h.src=i==="pearl"?If:Pf,ee("#flyL").appendChild(h);let d=Math.random()*6.28,f=20+Math.random()*50,g=e+Math.cos(d)*f,x=t+Math.sin(d)*f-20,m=performance.now()+u*35,p=650+Math.random()*150,w=b=>{let y=Math.min(1,Math.max(0,(b-m)/p)),P=y<.3?y/.3:1,A=y<.3?0:(y-.3)/.7,E=A*A,N=e+(g-e)*P+(o-g)*E,W=t+(x-t)*P+(l-x)*E,v=1-E*.4;if(h.style.transform=`translate(${N-16}px,${W-16}px) scale(${v})`,y<1)requestAnimationFrame(w);else if(h.remove(),--c===0&&r&&r(),u%2===0){let S=ee(i==="pearl"?"#pearlP":"#goldP");S.classList.remove("bump"),S.offsetWidth,S.classList.add("bump"),$.play("coin",.35)}};h.style.transform=`translate(${e-16}px,${t-16}px)`,requestAnimationFrame(w)}}toast(e,t=""){let n=Bi("div","tst ts "+t,e);ee("#toast").appendChild(n),setTimeout(()=>n.remove(),2700)}open(e){this.sel=e,this.panelOpen=!0,document.body.classList.add("pOpen"),ee("#panel").classList.add("open"),this.panelBuild(),$.play("open",.5)}close(){this.panelOpen&&(this.panelOpen=!1,this.sel=null,document.body.classList.remove("pOpen"),ee("#panel").classList.remove("open"),$.play("close",.4),this.ctx.onClose&&this.ctx.onClose())}panelBuild(){let e=this.sel,t=st[Et[e]],n=ee("#panel");n.innerHTML=`<div class="card"><div class="x" id="pX">\u2715</div>
      <div class="ph"><div class="bi"><img src="assets/ui/${e}_3.webp" alt=""></div><div><h2>${t.name}</h2><div class="d">${t.desc}</div></div><div class="lvb ts" id="pLv"></div></div>
      <div class="stats"><div class="stat"><small>Per cycle</small><b id="pPay"></b></div><div class="stat"><small>Cycle</small><b id="pCyc"></b></div><div class="stat"><small>Per second</small><b id="pPs"></b></div></div>
      <div class="ms"><div class="row"><span id="pMsT"></span><span id="pMsN"></span></div><div class="bar"><i id="pMs"></i></div></div>
      <div class="mgr" id="pMgr"></div>
      <div class="acts"><div class="seg" id="pSeg"><span data-m="1">\xD71</span><span data-m="10">\xD710</span><span data-m="next">NEXT</span><span data-m="max">MAX</span></div><button class="btn" id="pBuy"></button></div></div>`,ee("#pX",n).onclick=()=>this.close(),n.querySelectorAll("#pSeg span").forEach(i=>i.onclick=()=>{this.mode=isNaN(+i.dataset.m)?i.dataset.m:+i.dataset.m,$.play("click",.5),this.panelRefresh()}),ee("#pBuy",n).onclick=i=>this.ctx.buy(e,this.G.buyN(e,this.mode),i.clientX,i.clientY),this.panelRefresh()}panelRefresh(){let e=this.sel;if(!e)return;let t=this.G,n=this.S,i=n.b[e],r=st[Et[e]],a=ee("#panel"),o=i.lv;ee("#pLv",a).innerHTML=`<small>LEVEL</small>${o}`;let l=Math.max(1,o),c=i.lv;i.lv=l;let u=t.payout(e),h=t.cycle(e);i.lv=c,ee("#pPay",a).innerHTML=Pn()+dt(u),ee("#pCyc",a).textContent=h<1?h.toFixed(2)+"s":h.toFixed(1)+"s",ee("#pPs",a).innerHTML=Pn()+dt(u/h);let d=t.nextMs(o),f=[0,...Wr].filter(y=>y<=o).pop()||0;ee("#pMsT",a).textContent=`Profit \xD72 at level ${d}`,ee("#pMsN",a).textContent=`${o}/${d}`,ee("#pMs",a).style.width=Math.min(100,(o-f)/(d-f)*100)+"%";let g=o<10?10:o<25?25:0;g&&(ee("#pMsT",a).textContent+=` \xB7 new look at ${g}`);let x=ee("#pMgr",a);if(!o)x.innerHTML=`<div class="t">Build it to start earning<small>${t.unlocked(e)?"Ready to build!":r.zone===2?"Needs the bridge to Skull Isle":"Build the "+st[Et[e]-1].name+" first"}</small></div>`;else if(i.m)x.innerHTML=`<img src="assets/ui/pirate_${Et[e]%6}.webp" alt=""><div class="t">First Mate hired<small>Works automatically, even offline</small></div><span style="color:#2a8a14;font-size:1.4em">\u2714</span>`;else{let y=n.gold>=r.mgr;x.innerHTML=`<img src="assets/ui/pirate_${Et[e]%6}.webp" alt=""><div class="t">Hire a First Mate<small>Automates this building + offline income</small></div><button class="btn blue ${y?"":"off"}" id="pHire">${Pn()}${dt(r.mgr)}</button>`,ee("#pHire",a).onclick=P=>this.ctx.hire(e,P.clientX,P.clientY)}a.querySelectorAll("#pSeg span").forEach(y=>y.classList.toggle("on",String(y.dataset.m)===String(this.mode))),ee("#pSeg",a).style.display=o?"":"none";let m=o?t.buyN(e,this.mode):1,p=t.cost(e,m),w=t.unlocked(e)&&n.gold>=p-1e-6,b=ee("#pBuy",a);b.className="btn "+(w?o?"":"gold glow":"off"),b.innerHTML=`${o?`Upgrade \xD7${m}`:"BUILD"}<small>${Pn()}${dt(p)}</small>`}modal(e,{close:t=!0,cls:n=""}={}){let i=ee("#modal");return i.innerHTML=`<div class="card ${n}">${t?'<div class="x" id="mX">\u2715</div>':""}${e}</div>`,i.classList.add("open"),this.modalClose=t,this.modalOpen=!0,t&&(ee("#mX",i).onclick=()=>this.closeModal()),$.play("page",.5),this.ctx.modal&&this.ctx.modal(!0),i}closeModal(){let e=ee("#modal");e.classList.remove("open"),e.innerHTML="",this.modalOpen=!1,$.play("close",.4),this.ctx.modal&&this.ctx.modal(!1),this.onModalClose&&this.onModalClose(),this.onModalClose=null}offline(e,t){let n=e.away>=3600?Math.floor(e.away/3600)+"h "+Math.floor(e.away%3600/60)+"m":Math.floor(e.away/60)+"m",i=this.modal(`<div class="mt">Welcome back, Captain!</div><div class="mb"><img src="assets/ui/chest.webp" style="width:7em;margin:-.3em 0 -.6em"><p>Your First Mates kept working for <b>${n}</b>${e.away>e.cap?` <br><small>(max ${Math.round(e.cap/3600)}h \u2014 hire a Quartermaster for more)</small>`:""}</p>
      <div class="big">${Pn()} ${dt(e.gold)}</div><div style="display:flex;gap:.6em;justify-content:center;margin-top:.8em"><button class="btn" id="oC">Collect</button><button class="btn purple" id="oD">\u25B6 Collect \xD72</button></div></div>`,{close:!1});ee("#oC",i).onclick=r=>{this.closeModal(),t(!1,r.clientX,r.clientY)},ee("#oD",i).onclick=r=>{this.closeModal(),t(!0,r.clientX,r.clientY)}}missions(){let e=this.G,t=this.S,n=this.ctx.d,i=this.ctx.yest;e.day(n);let r=e.streakState(n,i),a=r?r.idx:(t.streak.n-1)%7,o=To.map((h,d)=>`<div class="day ${d<(r?r.idx:t.streak.n%7||7)?"got":""} ${r&&d===r.idx?"now":""}">Day ${d+1}<br>${h.p?cs()+h.p:Pn()+h.g+"m"}</div>`).join(""),l=t.mis.list.map((h,d)=>`<div class="mrow"><div class="t">${h.t.replace("{n}",dt(h.n))}<div class="bar"><i style="width:${h.c/h.n*100}%"></i></div></div>${h.claimed?'<span style="color:#2a8a14;font-size:1.4em">\u2714</span>':`<button class="btn ${h.done?"gold glow":"off"}" data-i="${d}">${cs()}10</button>`}</div>`).join(""),c=t.mis.list.every(h=>h.claimed),u=this.modal(`<div class="mt">Captain's Log</div><div class="mb"><div class="ribbon">Daily Streak</div><div class="days">${o}</div>
      ${r?`<button class="btn gold glow" id="sC">Claim Day ${r.idx+1}</button>`:'<p style="color:#8a5a2a">Come back tomorrow for the next reward!</p>'}
      <div class="ribbon" style="margin-top:.6em">Daily Missions</div>${l}
      <div class="mrow"><div class="t"><b>Complete all 3</b><br><small>Bonus chest</small></div>${t.mis.bonus?'<span style="color:#2a8a14;font-size:1.4em">\u2714</span>':`<button class="btn ${c?"gold glow":"off"}" id="bB">${cs()}25</button>`}</div></div>`);u.querySelectorAll("[data-i]").forEach(h=>h.onclick=d=>{e.claimMission(+h.dataset.i)?(this.fly(d.clientX,d.clientY,6,"pearl"),$.play("pearl"),this.ctx.save(),this.missions()):$.play("deny")}),ee("#sC",u)&&(ee("#sC",u).onclick=h=>{let d=e.claimStreak(n,i);d&&(d.p&&this.fly(h.clientX,h.clientY,8,"pearl"),d.g&&this.fly(h.clientX,h.clientY,10),$.play("win"),this.ctx.save(),this.missions())}),ee("#bB",u)&&(ee("#bB",u).onclick=h=>{e.claimBonus()?(this.fly(h.clientX,h.clientY,10,"pearl"),$.play("win"),this.ctx.save(),this.missions()):$.play("deny")})}crewCard(e,t){return`<div class="cc ${t?"":"no"}" style="--rc:${Cf(e.r)}"><img src="assets/crew/${e.id}.webp" alt=""><div class="n">${t?e.name:"???"}<br><span style="opacity:.8">${t?e.txt:ki[e.r].n}</span></div>${t?`<span class="l">Lv${1+(t-1)}</span>`:""}</div>`}crew(){let e=this.S,t=ls.filter(r=>e.crew[r.id]).length,n=e.pearls>=di,i=this.modal(`<div class="mt">Your Crew</div><div class="mb"><p style="margin:.1em 0">Recruit legendary sailors with pearls. Duplicates level them up!</p>
      <div class="grid">${ls.map(r=>this.crewCard(r,e.crew[r.id]||0)).join("")}</div><p style="margin:.2em;font-size:.85em;color:#8a5a2a">${t}/${ls.length} found \xB7 Common 60% \xB7 Rare 28% \xB7 Epic 10% \xB7 Legendary 2%</p>
      <button class="btn purple ${n?"glow":"off"}" id="cP" style="font-size:1.2em">Recruit ${cs()} ${di}</button>${n?"":'<p style="font-size:.85em;color:#8a5a2a">Earn pearls from missions, quests, ship chests and raids</p>'}</div>`);ee("#cP",i).onclick=()=>this.ctx.pull()}reveal(e,t){let n=ee("#reveal"),i=e.c;n.style.setProperty("--rc",Cf(i.r)),n.innerHTML=`<div class="rays"></div><div class="rc">${this.crewCard(i,e.lv)}<div class="rr ts">${ki[i.r].n.toUpperCase()}${e.dup?" \xB7 LEVEL UP!":" \xB7 NEW!"}</div><div class="rn ts">${i.name}</div><div class="rt ts">${i.txt}${e.dup?` (now Lv${e.lv})`:""}</div>
      <div style="display:flex;gap:.6em;justify-content:center"><button class="btn" id="rOk">Great!</button>${this.S.pearls>=di?`<button class="btn purple" id="rAg">Again ${cs()}${di}</button>`:""}</div></div>`,n.classList.add("open"),ee("#rOk",n).onclick=()=>{n.classList.remove("open"),this.crew()},ee("#rAg",n)&&(ee("#rAg",n).onclick=()=>{n.classList.remove("open"),t()})}legend(){let e=this.G,t=this.S,n=e.pendingStars(),i=e.starMult(),r=1+(t.stars+n)*.1,a=Math.pow(t.stars+n+1,2)*1e8-(t.life+(t.lifeBank||0)),o=this.modal(`<div class="mt">Become a Legend</div><div class="mb"><img src="assets/ui/statue.webp" style="width:6em;margin:-.4em 0 -.4em">
      <p>Retire your fleet and start a new harbour. Every <span class="star">\u2605</span> Legend Star gives <b>+10% income forever</b>.</p>
      <div class="mrow" style="justify-content:space-around;text-align:center"><div>Stars now<br><span class="star">\u2605</span> <b style="font-size:1.4em">${t.stars}</b><br><small>\xD7${i.toFixed(1)}</small></div><div style="font-size:2em">\u279C</div><div>After<br><span class="star">\u2605</span> <b style="font-size:1.4em;color:#2a8a14">${t.stars+n}</b><br><small>\xD7${r.toFixed(1)}</small></div></div>
      <p style="font-size:.85em;color:#8a5a2a">Keep: pearls, crew, stars. Reset: gold, buildings, bridge.<br>Next star at ${dt(Math.max(0,a))} more gold earned.</p>
      <button class="btn gold ${n>0?"glow":"off"}" id="lP" style="font-size:1.2em">${n>0?`Claim ${n} \u2605 & Restart`:"Not enough glory yet"}</button></div>`);ee("#lP",o).onclick=()=>{n>0?this.ctx.prestige():$.play("deny")}}rum(){let e=this.S,t=this.modal(`<div class="mt">Rum Rush!</div><div class="mb"><img src="assets/ui/barrels.webp" style="width:6em;margin:-.3em 0 -.5em"><p>Crack open the good barrels:<br><b style="font-size:1.4em;color:#c86a10">\xD72 ALL income</b> for 5 minutes${e.rum>0?" (stacks, up to 30 min)":""}.</p>
      ${e.rum>0?`<p>Active: ${Math.ceil(e.rum/60)} min left</p>`:""}<button class="btn purple glow" id="rW" style="font-size:1.2em">\u25B6 Watch ad</button></div>`);ee("#rW",t).onclick=()=>{this.closeModal(),this.ctx.rum()}}settings(){let e=this.S,t=this.modal(`<div class="mt">Settings</div><div class="mb" style="text-align:left">
      <div class="set">\u{1F3B5} Music<div class="tg ${e.music>0?"on":""}" id="tM"></div></div><div class="set">\u{1F50A} Sound effects<div class="tg ${e.sfx>0?"on":""}" id="tS"></div></div>
      <p style="font-size:.8em;color:#8a5a2a;text-align:center;margin-top:1em">Pirate Cove Tycoon \xB7 progress saves automatically<br>Taps: ${e.st.taps} \xB7 Ships: ${e.st.ships} \xB7 Raids won: ${e.wins} \xB7 Legends: ${e.legends}</p></div>`);ee("#tM",t).onclick=n=>{e.music=e.music>0?0:.6,n.target.classList.toggle("on",e.music>0),$.apply(),this.ctx.save()},ee("#tS",t).onclick=n=>{e.sfx=e.sfx>0?0:.9,n.target.classList.toggle("on",e.sfx>0),$.apply(),$.play("click"),this.ctx.save()}}handUpdate(){let e=ee("#hand"),t=this.ctx.handTarget&&this.ctx.handTarget();if(!t||this.modalOpen){e.style.display="none";return}let n,i;if(t.el){let r=t.el.getBoundingClientRect();if(!r.width){e.style.display="none";return}n=r.left+r.width*.5,i=r.top+r.height*.6}else{let r=this.proj(t.x,t.y,t.z);if(!r.ok){e.style.display="none";return}n=r.x,i=r.y}e.style.display="block",e.style.transform=`translate(${n-this.fs*.9}px,${i}px)`}}});var Pt,In,Do,Df=Qe(()=>{wt();sr();pi();Zs();Pt=R,In=s=>document.querySelector(s),Do=class{constructor(e,t,n,i,r,a){this.V=e,this.life=t,this.fx=n,this.G=i,this.ui=r,this.ctx=a,this.on=!1,this.balls=[],this.ballGeo=new en(.32,10,8),this.ballMat=new tt({color:1710618,metalness:.6,roughness:.4})}start(){let e=this.G,t=e.S;this.on=!0,document.body.classList.add("raid"),this.t=0,this.state="intro";let n=this.fl=fi[Math.min(fi.length-1,t.fleet||0)];this.bounty=!!t.bounty,t.bounty=0;let i=this.fk=this.bounty?"ghost":ir[t.wins%ir.length],r=this.F=Eo[i];this.fname=r.name,this.fleeT=r.flee||0,this.escaped=!1,this.fleeWarn=0,this.phase=1,this.fade=0,this.fadeOn=!1,this.fadeT=4,this.vol=[],this.ehp=this.emax=Math.round((100+10*Math.min(t.wins,40))*r.hp),this.php=this.pmax=n.hp,this.shots=0,this.sunkFx=0,this.hits=0,this.crits=0,this.chain=null,this.me=this.life.mk(n.id),this.me.scale.setScalar(n.s),this.foe=this.life.mk(r.node),this.foe.scale.setScalar(r.s),this.gm=null,r.boss&&(this.gm=[],this.foe.traverse(c=>{c.isMesh&&(c.material=c.material.clone(),c.material.transparent=!0,c.material.emissive=new Z(2817946),c.material.emissiveIntensity=.03,this.gm.push(c.material))}));let a=this.V.portrait;this.mePos=new Pt(a?15.5:8,0,a?31:28),this.foePos=new Pt(a?26:31,0,a?26:27),this.me.rotation.y=Math.PI/2+.15,this.foe.rotation.y=r.flee?Math.PI/2-.2:-Math.PI/2+.15,this.me.position.copy(this.mePos).add(new Pt(-14,0,6)),this.foe.position.copy(this.foePos).add(new Pt(16,0,4)),this.V.scene.add(this.me,this.foe),this.saved={g:this.V.goal.clone(),d:this.V.goalDist},this.V.lock=!0,this.V.focus(new Pt(this.V.portrait?20.5:19.5,0,this.V.portrait?21.5:25),this.V.portrait?62:44);let o=t.b.tower.lv?t.b.tower.lv>=25?3:t.b.tower.lv>=10?2:1:0;this.dmgM=(1+e.crewFx("raid"))*(1+.15*o)*n.dmg,this.tower=o;let l=In("#raidUI");l.innerHTML=`<div class="hp me" style="left:.8em"><span class="ts">\u26F5 ${n.name}</span><div class="bar"><i id="hpMe" style="width:100%"></i></div></div>
      <div class="hp" style="right:.8em;text-align:right"><span class="ts">${r.boss?'<b class="boss">BOSS</b> ':r.flee?"\u{1F4B0} ":"\u2620 "}${this.fname}${r.flee?' <b id="rFlee" class="flee">\u23F3'+r.flee+"</b>":""}</span><div class="bar"><i id="hpFoe" style="width:100%"></i></div></div>
      <div id="rflash"></div><div id="rmsg" class="ts"></div><div id="tbar"><div class="z"></div><div class="zc"></div><div class="mist ts">MIST \u2014 WAIT!</div><div class="nd"></div></div><button class="btn red" id="fire">FIRE!</button>`,l.classList.add("open"),this.zone(),this.needle=0,this.dir=1,this.cool=0,In("#fire").addEventListener("pointerdown",c=>{c.stopPropagation(),c.preventDefault(),this.fire()}),this.key=c=>{(c.code==="Space"||c.code==="Enter")&&(c.preventDefault(),this.fire())},window.addEventListener("keydown",this.key),this.msg(r.boss?this.bounty?"BOUNTY: the Ghost Galleon! \xD72 loot":"BOSS: the Ghost Galleon!":r.tip?`${this.fname} ${r.tip}!`:"Ready the cannons!",r.boss?"#7dffc0":"#fff"),$.setTrack("battle"),$.play("horn"),this.foeT=3.2}zone(){let e=Math.max(.14,.26-this.shots*.008),t=.2+Math.random()*(.6-e);this.zw=[t,t+e],this.zc=[t+e*.38,t+e*.62];let n=In("#raidUI");if(!n)return;let i=n.querySelector(".z"),r=n.querySelector(".zc");i.style.left=t*100+"%",i.style.width=e*100+"%",r.style.left=this.zc[0]*100+"%",r.style.width=(this.zc[1]-this.zc[0])*100+"%"}msg(e,t="#fff"){let n=In("#rmsg");n&&(n.textContent=e,n.style.color=t,n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop"),clearTimeout(this.mt),this.mt=setTimeout(()=>{n&&(n.textContent="")},1200))}fire(){if(this.state!=="fight"||this.cool>0)return;this.cool=.75,this.shots++;let e=this.needle,t=0,n=!1;e>=this.zc[0]&&e<=this.zc[1]?(t=38,n=!0):e>=this.zw[0]&&e<=this.zw[1]&&(t=22);let i=this.fade>.5;i&&(t=0,n=!1,this.shots--),t&&this.hits++,n&&this.crits++,t=Math.round(t*this.dmgM);let r=this.me.position.clone().add(new Pt(1.6,2.2,0)),a=this.foe.position.clone().add(new Pt(t?(Math.random()-.5)*2:4+Math.random()*3,t?2:0,t?0:(Math.random()-.5)*6));this.blast(r,a,.2),this.shoot(r,a,()=>{if(t){this.ehp=Math.max(0,this.ehp-t),this.fx.hit(a,n?1.4:1),$.play("crash"),this.V.shake(n?.7:.4,.3),this.flash(n?"w":"o"),this.ui.floatAt(a.clone().add(new Pt(0,3,0)),(n?"CRIT! ":"")+"-"+t,n?"big":""),this.burn(this.foe,this.ehp/this.emax);let o=In("#hpFoe");o.style.width=this.ehp/this.emax*100+"%",this.jolt(this.foe,n?1.6:1),this.ehp<=0?this.end(!0):this.phases()}else this.fx.waterColumn(a,1),$.play("splash")}),this.msg(i?"Passed through the mist!":n?"BULLSEYE!":t?"HIT!":"Missed!",i?"#9fe8ff":n?"#ffd23a":t?"#b6ff7a":"#ff9a8a"),this.zone()}phases(){if(!this.F.boss||this.state!=="fight")return;let e=this.ehp/this.emax,t=e<=.3?3:e<=.6?2:1;if(t<=this.phase)return;this.phase=t;let n=this.foe.position.clone().add(new Pt(0,4,0));this.fx.sparkle(n,40,8257472,4,.7),this.fx.shock(new Pt(n.x,.3,n.z),9,8257472),$.play("horn"),this.V.shake(.5,.4),t===2?(this.msg("She fades into the mist! Wait for her to show.","#9fe8ff"),this.fadeT=1.2):(this.msg("CURSED BROADSIDES! Finish her!","#7dffc0"),this.foeT=Math.min(this.foeT,1))}blast(e,t,n){let i=t.clone().sub(e);i.y=0,i.normalize(),this.fx.muzzle(e,i),$.play("boom",.8),this.V.shake(n,.18)}flash(e){let t=In("#rflash");t&&(t.className=e,t.offsetWidth,t.classList.add("go"))}jolt(e,t){e.userData.jolt=.35*t}burn(e,t){let n=t<=.15?3:t<=.4?2:t<=.7?1:0,i=e.userData.fires||(e.userData.fires=[]);for(;i.length<n;)i.push(new Pt((Math.random()-.5)*1.4,1.8+Math.random()*.8,(i.length-1)*2.4+(Math.random()-.5)*1.2))}shoot(e,t,n){let i=new Ee(this.ballGeo,this.ballMat);i.position.copy(e),this.V.scene.add(i),this.balls.push({m:i,from:e,to:t,t:0,T:.75+e.distanceTo(t)*.008,done:n})}foeFire(){let e=this.F,t=Math.random()<e.acc,n=this.foe.position.clone().add(new Pt(-1.8,2.6,0)),i=this.me.position.clone().add(new Pt(t?(Math.random()-.5)*2:-3-Math.random()*4,t?1.8:0,t?0:(Math.random()-.5)*6));this.blast(n,i,.08),this.shoot(n,i,()=>{if(t){let r=e.dmg[0]+Math.floor(Math.random()*(e.dmg[1]-e.dmg[0]+1));this.php=Math.max(0,this.php-r),this.fx.hit(i,1),$.play("crash"),this.V.shake(.8,.35),this.flash("r"),In("#hpMe").style.width=this.php/this.pmax*100+"%",this.ui.floatAt(i.clone().add(new Pt(0,3,0)),"-"+r,""),this.burn(this.me,this.php/this.pmax),this.jolt(this.me,1),this.php<=0&&this.end(!1)}else this.fx.waterColumn(i,1),$.play("splash")})}end(e){if(this.state==="end")return;this.state="end",this.win=e,this.sinkT=0,this.sinker=e?this.foe:this.escaped?null:this.me,In("#tbar").style.display="none",In("#fire").style.display="none";let t=this.G,n=t.S;n.raidAt=Date.now();let i=(this.sinker||this.foe).position;this.chain=[0,.25,.5,.8,1.15].map((d,f)=>({t:d,p:new Pt((Math.random()-.5)*1.4,1.6+Math.random(),(f%2?1:-1)*(.4+f*.8))})),this.gm&&this.gm.forEach(d=>d.opacity=1),this.fade=0;let r=In("#tbar");r&&r.classList.remove("misted"),e?(n.wins++,n.st.raids++,t.mis("raid",1),t.qtick("raid"),this.msg("VICTORY!","#ffd23a"),$.play("win"),this.V.focus(new Pt(i.x-4,0,i.z-2),this.V.portrait?54:38)):this.escaped?(this.msg("She escaped!","#ffd23a"),$.play("lose"),this.foePos.x+=40):(this.msg("Sunk!","#ff9a8a"),$.play("lose"));let a=this.shots?this.hits/this.shots:0,o=e?1+(a>=.6?1:0)+(a>=.85||this.crits>=3?1:0):0,l=this.F.loot*(this.bounty?2:1),c=1-this.ehp/this.emax,u=t.potential()*(e?90*l*(1+.5*this.tower)*[1,1,1.25,1.5][o]:this.escaped?15+45*c:15),h=e?3+Math.min(5,Math.floor(n.wins/3))+(o===3?2:0)+(this.F.boss?8:0)+(this.F.flee?4:0):this.escaped&&c>.5?2:0;setTimeout(()=>{e&&(this.fx.confetti(i.clone().add(new Pt(0,5,0)),90),this.fx.coinBurst(i.clone().add(new Pt(0,1,0)),30,12),$.play("coins"))},900),setTimeout(()=>this.loot(e,u,h,o,a),2600)}loot(e,t,n,i,r){let a=this.G,o=a.S,l='<img class="ico" src="assets/ui/coin.webp">',c='<img class="ico" src="assets/ui/pearl.webp">',u=e?`<div class="lstars">${[0,1,2].map(p=>`<b class="${p<i?"on":""}" style="animation-delay:${.35+p*.28}s">\u2605</b>`).join("")}</div>`:"",h=this.ui.modal(`<div class="mt">${e?this.F.boss?"Boss defeated!":"Victory!":this.escaped?"She escaped!":"Defeated..."}</div><div class="mb loot${e?" win":""}">${e?'<div class="lrays"></div>':""}${u}<img class="lchest" src="assets/ui/${e?"chest":"barrels"}.webp"><p>${e?this.F.boss?"The Ghost Galleon's cursed hoard is yours!":this.F.flee?"Her hold was packed with gold and pearls!":"You plundered their hold!":this.escaped?"She got away \u2014 but dropped some loot overboard!":"The crew salvaged a few barrels."}</p>
      <div class="big"><span>${l} <span id="lG">0</span></span>${n?` &nbsp;<span>${c} ${n}</span>`:""}</div>
      <div class="lstat">Shots ${this.shots} \xB7 Hits ${this.hits} \xB7 Bullseyes ${this.crits}${e&&i>1?` \xB7 <b>Accuracy bonus \xD7${[1,1,1.25,1.5][i]}</b>`:""}</div>
      ${e?"":this.escaped?'<p style="font-size:.85em;color:#8a5a2a">Tip: Treasure Galleons flee \u2014 aim for the yellow centre to sink her fast.</p>':`<p style="font-size:.85em;color:#8a5a2a">Tip: hit the yellow centre for criticals. ${(o.fleet||0)<2?"Buy a bigger flagship at the Fleet dock, upgrade":"Upgrade"} the Cannon Fort and recruit gunners for more damage.</p>`}
      <div style="display:flex;gap:.6em;justify-content:center;margin-top:.5em">${e?'<button class="btn purple" id="rDbl">\xD72 Loot \u25B6</button>':""}<button class="btn gold glow" id="rDone">Collect</button></div></div>`,{close:!1}),d=h.querySelector("#lG"),f=performance.now(),g=()=>{let p=Math.min(1,(performance.now()-f-500)/900);d.isConnected&&(d.textContent=dt(t*Math.max(0,1-Math.pow(1-Math.max(0,p),3))),p<1&&requestAnimationFrame(g))};g(),e&&[0,1,2].slice(0,i).forEach(p=>setTimeout(()=>$.play("coin",.8+p*.2),350+p*280));let x=(p,w,b)=>{this.ui.closeModal(),a.addGold(t*p),o.pearls+=n,this.ui.fly(w,b,12+(p>1?8:0)),n&&this.ui.fly(w,b,5,"pearl"),$.play("coins"),this.stop(),a.checkQuest(),this.ctx.afterRaid(p>1)};h.querySelector("#rDone").onclick=p=>x(1,p.clientX,p.clientY);let m=h.querySelector("#rDbl");m&&(m.onclick=p=>{let w=p.clientX,b=p.clientY;m.disabled=!0,ut.ad("rewarded",y=>x(y?2:1,w,b))})}stop(){this.on=!1,document.body.classList.remove("raid"),In("#raidUI").classList.remove("open"),In("#raidUI").innerHTML="",window.removeEventListener("keydown",this.key),this.V.scene.remove(this.me,this.foe),this.gm&&this.gm.forEach(e=>e.dispose()),this.gm=null,this.balls.forEach(e=>this.V.scene.remove(e.m)),this.balls=[],this.V.lock=!1,this.V.goal.copy(this.saved.g),this.V.goalDist=this.saved.d,$.setTrack("main")}update(e){if(!this.on)return;this.t+=e;let t=this.t,n=(i,r,a)=>{i.position.x+=(r.x-i.position.x)*Math.min(1,e*1.2),i.position.z+=(r.z-i.position.z)*Math.min(1,e*1.2),i.position.y=-.7+Math.sin(t*1.3+a)*.15,i.rotation.z=Math.sin(t*1.1+a)*.05,i.rotation.x=Math.sin(t*.9+a)*.03};if((this.state!=="end"||this.sinker!==this.me)&&n(this.me,this.mePos,0),(this.state!=="end"||this.sinker!==this.foe)&&n(this.foe,this.foePos,2),this.state==="intro"&&t>2.2&&(this.state="fight",this.msg("FIRE when the marker is in the green!")),this.state==="fight"){let i=1.15+Math.min(.9,this.shots*.05);this.needle+=this.dir*e*i,this.needle>1&&(this.needle=1,this.dir=-1),this.needle<0&&(this.needle=0,this.dir=1);let r=document.querySelector("#tbar .nd");r&&(r.style.left=this.needle*100+"%"),this.cool-=e;let a=this.F;if(this.foeT-=e,this.foeT<=0){this.foeT=(a.rate[0]+Math.random()*(a.rate[1]-a.rate[0]))*(this.phase===3?.6:1),this.foeFire();for(let o=1;o<(a.volley||(this.phase===3?2:1));o++)this.vol.push(.38*o)}for(let o=this.vol.length-1;o>=0;o--)this.vol[o]-=e,this.vol[o]<=0&&(this.vol.splice(o,1),this.foeFire());if(this.fleeT){this.fleeT=Math.max(0,this.fleeT-e),this.foePos.x+=e*(this.V.portrait?.1:.2),this.foePos.z-=e*.08;let o=document.getElementById("rFlee");if(o){let l=Math.ceil(this.fleeT);o.textContent!=="\u23F3"+l&&(o.textContent="\u23F3"+l),o.classList.toggle("hot",this.fleeT<8)}if(Math.random()<e*5&&this.fx.sparkle(this.foe.position.clone().add(new Pt((Math.random()-.5)*4,2.5+Math.random()*3,(Math.random()-.5)*2)),1,16765498,1.5,.6),this.fleeT<8&&!this.fleeWarn&&(this.fleeWarn=1,this.msg("She is getting away! FIRE!","#ffd23a")),Math.random()<e*3){let l=this.foe.position.clone().add(new Pt(-5+Math.random()*2,0,(Math.random()-.5)*2));l.y=.1,this.fx.wake(l)}if(this.fleeT<=0){this.escaped=!0,this.end(!1);return}}if(this.phase>=2&&(this.fadeT-=e,this.fadeT<=0)){let o=this.fadeOn=!this.fadeOn;this.fadeT=o?2.2:3.6+Math.random()*1.5,o&&(this.fx.sparkle(this.foe.position.clone().add(new Pt(0,3,0)),24,12577535,4,.8),$.play("splash",.5))}}if(this.gm){let i=this.state==="fight"&&this.fadeOn?1:0;this.fade+=(i-this.fade)*Math.min(1,e*5);let r=1-this.fade*.78;this.gm.forEach(o=>{o.opacity=r,o.depthWrite=r>.95,o.emissiveIntensity=.03+this.fade*.3+(this.phase>=3?.07+Math.sin(t*8)*.05:0)});let a=document.getElementById("tbar");a&&a.classList.toggle("misted",this.fade>.5)}for(let i of[this.me,this.foe]){let r=i.userData;if(r.jolt>0&&(r.jolt=Math.max(0,r.jolt-e),i.rotation.z+=Math.sin(r.jolt*40)*r.jolt*.25,i.position.x+=Math.sin(r.jolt*55)*r.jolt*.3),r.fires&&i.position.y>-3)for(let a of r.fires)Math.random()<e*26&&this.fx.flame(i.localToWorld(a.clone()),1+(this.sinker===i?.4:0))}if(this.state==="end"&&this.sinker){this.sinkT+=e;let i=this.sinker,r=this.sinkT;if(this.chain){for(let o of this.chain)if(!o.done&&r>=o.t){o.done=1;let l=i.localToWorld(o.p.clone());this.fx.hit(l,1.1),this.V.shake(.6,.3),$.play(o.t?"crash":"boom"),(i.userData.fires||(i.userData.fires=[])).push(o.p.clone())}}let a=Math.max(0,r-.9);if(i.position.y=-.7-a*a*.9,i.rotation.z=Math.min(.55,a*.4)*(i===this.foe?-1:1),i.rotation.x=-Math.min(.5,a*.3),a>0&&Math.random()<e*12){let o=i.position.clone().add(new Pt((Math.random()-.5)*5,0,(Math.random()-.5)*2));o.y=.1,this.fx.splash(o,.35),this.fx.wake(o)}if(a>0&&!this.sunkFx){this.sunkFx=1;let o=i.position.clone();o.y=.2,this.fx.waterColumn(o,1.5)}i.position.y<-9&&(i.visible=!1)}for(let i=this.balls.length-1;i>=0;i--){let r=this.balls[i];r.t+=e;let a=Math.min(1,r.t/r.T);r.m.position.lerpVectors(r.from,r.to,a),r.m.position.y+=Math.sin(a*Math.PI)*(3+r.from.distanceTo(r.to)*.12),this.fx.ballTrail(r.m.position),a>=1&&(this.V.scene.remove(r.m),this.balls.splice(i,1),r.done())}}}});function Uy(){let s=new ts([new ft(0,-1,0),new ft(.5,2,0),new ft(-.4,4.6,0),new ft(.6,6.8,0),new ft(1.9,7.7,0),new ft(2.5,6.9,0)]),e=40,t=10,n=new Qa(s,e,.8,t,!1),i=n.attributes.position,r=n.attributes.normal,a=[],o=new ft,l=new Z(8073120),c=new Z(15899336),u=new Z(11818454),h=new Z;for(let d=0;d<=e;d++){s.getPointAt(d/e,o);let f=1-.85*Math.pow(d/e,.9);for(let g=0;g<=t;g++){let x=d*(t+1)+g;i.setXYZ(x,o.x+(i.getX(x)-o.x)*f,o.y+(i.getY(x)-o.y)*f,o.z+(i.getZ(x)-o.z)*f);let m=r.getX(x)>.35?1:0;h.copy(l).lerp(u,d/e),m&&h.copy(c).multiplyScalar(.85+.15*Math.sin(d*2.2)),a.push(h.r,h.g,h.b)}}return n.setAttribute("color",new ct(a,3)),n.computeVertexNormals(),n}var ft,rt,jh,Ny,Nf,rr,No,Uf=Qe(()=>{wt();Qs();sr();pi();Zs();ft=R,rt=Math.random,jh=(s,e,t)=>Math.sin(s*.33+t*1.3)*.12+Math.sin(e*.41-t*1.1)*.09,Ny='<img class="ico" src="assets/ui/coin.webp">',Nf='<img class="ico" src="assets/ui/pearl.webp">',rr={kraken:{t:"KRAKEN ATTACK!",s:"Tap the tentacles to drive it off",ico:"\u{1F419}",d:20},storm:{t:"STORM!",s:"Tap the drifting cargo before it sinks",ico:"\u26C8",d:22},map:{t:"TREASURE MAP!",s:"Dig at the right X \u2014 fewer tries, bigger chest",ico:"\u{1F4DC}",d:26},trader:{t:"RICH TRADER!",s:"A jewel trader is sailing in \u2014 open her chest",ico:"\u{1F48E}",d:45},bounty:{t:"GHOST GALLEON SIGHTED!",s:"Raid now: boss fight, \xD72 loot",ico:"\u{1F47B}",d:45}};No=class{constructor(e,t,n,i,r,a,o){this.V=e,this.life=t,this.fx=n,this.G=i,this.S=i.S,this.ui=r,this.raid=a,this.ctx=o,this.cur=null,this.pick=[],this.dying=[],this.last="",this.next=cn.get("ev")?4:55+rt()*20,this.t=0,this.n=0;let l=this.ban=document.createElement("div");l.id="evB",l.className="pe",document.getElementById("ui").appendChild(l);let c=this.rain=document.createElement("div");c.id="storm",document.body.insertBefore(c,document.getElementById("ui")),this.M={tent:new tt({vertexColors:!0,roughness:.38,metalness:0}),eye:new tt({color:16774856,roughness:.3,emissive:4209168}),pupil:new tt({color:1313304,roughness:.2}),wood:new tt({color:11039806,roughness:.8}),band:new tt({color:5912602,roughness:.7}),gold:new tt({color:16765002,roughness:.35,metalness:.6,emissive:3811840}),red:new tt({color:14168618,roughness:.6,emissive:4196352}),sand:new tt({color:15123594,roughness:.95}),hit:new gt({visible:!1})}}update(e){this.t+=e;for(let a=this.dying.length-1;a>=0;a--){let o=this.dying[a];o.t-=e,o.c.upd&&o.c.upd(e),o.t<=0&&(this.dying.splice(a,1),this.clean(o.c))}let t=this.S,n=document.getElementById("bRaid");if(n&&n.classList.toggle("bounty",!!t.bounty&&!this.raid.on),this.cur){let a=this.cur;if(this.raid.on&&a.k!=="bounty"){this.end(!1,!0);return}a.left-=e,a.upd&&a.upd(e),this.cur&&(this.banner(),a.left<=0&&this.end(!1));return}if(this.raid.on||this.ui.modalOpen||document.hidden||t.q<6){this.next=Math.max(this.next,4);return}if(this.next-=e,this.next>0)return;let i=["kraken","storm","map","trader","map","kraken"].filter(a=>a!==this.last&&!(a==="trader"&&this.life.ships.some(o=>o.kind==="merchant")));t.b.shipyard.lv&&t.wins>=1&&this.last!=="bounty"&&!t.bounty&&i.push("bounty");let r=cn.get("ev")&&!this.n?cn.get("ev"):i[Math.floor(rt()*i.length)];this.start(r)||(this.next=5)}start(e){if(this.cur||this.raid.on||!rr[e])return!1;let t={k:e,left:rr[e].d,d:rr[e].d,objs:[],got:0};return this[e](t)===!1?(this.clean(t),!1):(this.cur=t,this.last=e,this.n++,this.ui.close(),this.fx.select(null),this.ban.innerHTML=`<div class="ei">${rr[e].ico}</div><div class="et"><b class="ts">${rr[e].t}</b><small class="ts" id="evS">${rr[e].s}</small><div class="eb"><i id="evT"></i></div></div>`,this.ban.className="pe show "+e,$.play(e==="storm"?"boom":"horn",.7),!0)}banner(){let e=this.cur,t=document.getElementById("evT");if(t&&(t.style.width=Math.max(0,e.left/e.d*100)+"%"),e.sub){let n=document.getElementById("evS");n&&n.textContent!==e.sub&&(n.textContent=e.sub)}}end(e,t){let n=this.cur;n&&(this.cur=null,this.pick=this.pick.filter(i=>!n.objs.some(r=>r===i||r.children.includes(i))),n.fin&&n.fin(e,t),this.ban.className="pe",this.next=70+rt()*35,t||!n.keep?this.clean(n):this.dying.push({c:n,t:n.keep/1e3}))}clean(e){for(let t of e.objs)this.V.scene.remove(t);e.mats&&e.mats.forEach(t=>t.dispose()),e.mats=null,this.pick=this.pick.filter(t=>!e.objs.some(n=>n===t||n.children.includes(t))),e.objs.length=0}tap(e,t,n){if(!this.cur||!this.pick.length)return!1;let i=e.intersectObjects(this.pick,!1)[0];if(!i)return!1;let r=i.object.userData;return r.ev&&this.cur&&this.cur.on&&this.cur.on(r.ev,t,n),!0}reward(e,t,n,i,r){let a=this.G,o=this.S;e&&(a.addGold(e),this.ui.fly(n,i,12)),t&&(o.pearls+=t,this.ui.fly(n,i,Math.min(8,3+t),"pearl")),this.ui.float(n,i-40,[e?`${Ny}+${dt(e)}`:"",t?`${Nf}+${t}`:""].join(" "),"big"),$.play("coins"),r&&(this.fx.coinBurst(r,24,10),this.fx.confetti(r.clone().add(new ft(0,3,0)),50)),o.st.events=(o.st.events||0)+1,this.ctx.save()}spots(e,t,n,i=[]){let r=new Ys,a=new gn(new ft(0,1,0),0),o=new ft,l=[],c=this.V.portrait;for(let u=0;u<400&&l.length<t;u++){let h=(c?.14:.16)+rt()*(c?.72:.68),d=(c?.22:.26)+rt()*(c?.46:.5);if(r.setFromCamera({x:h*2-1,y:-(d*2-1)},this.V.cam),!r.ray.intersectPlane(a,o))continue;let f=Ht(o.x,o.z),g;if(e==="water")g=f<-1.6&&Ht(o.x+2.5,o.z)<-1&&Ht(o.x-2.5,o.z)<-1&&Ht(o.x,o.z+2.5)<-1&&Ht(o.x,o.z-2.5)<-1&&Math.hypot(o.x-5.6,o.z-9.5)>7;else{if(g=f>.9&&f<7&&Math.abs(Ht(o.x+1.2,o.z)-Ht(o.x-1.2,o.z))<.7&&Math.abs(Ht(o.x,o.z+1.2)-Ht(o.x,o.z-1.2))<.7&&Math.hypot(o.x-Oi.x,o.z-Oi.z)>4.5,g)for(let x in Ct){let m=Ct[x];if(Math.hypot(o.x-m.x,o.z-m.z)<m.r+1.8){g=!1;break}}g&&(o.y=f)}g&&l.every(x=>Math.hypot(x.x-o.x,x.z-o.z)>=n)&&i.every(x=>Math.hypot(x.x-o.x,x.z-o.z)>=x.r)&&l.push(o.clone())}return l}hitBox(e,t,n,i){let r=new Ee(t,this.M.hit);return r.position.y=n,r.userData.ev=i,e.add(r),this.pick.push(r),r}kraken(e){let t=this.spots("water",40,2),n=null,i=0;for(let h of t){let d=t.filter(f=>{let g=Math.hypot(h.x-f.x,h.z-f.z);return g>3&&g<7.5});d.length>i&&(i=d.length,n=h)}if(!n)return!1;let r=n,a=[];for(let h=0;h<12&&a.length<4;h++){let d=h/12*Math.PI*2+rt()*.3,f=4+rt()*1.5,g=r.x+Math.cos(d)*f,x=r.z+Math.sin(d)*f*.8;Ht(g,x)<-1.3&&a.every(m=>Math.hypot(m.x-g,m.z-x)>3.6)&&a.push(new ft(g,0,x))}if(a.length<3)return!1;this.tg=this.tg||Uy();let o=new An(1.7,1.7,9,8);e.T=a.map((h,d)=>{let f=new kt,g=new Ee(this.tg,this.M.tent);g.castShadow=!0,f.add(g),f.position.set(h.x,-10,h.z),f.rotation.y=Math.atan2(h.x-r.x,h.z-r.z)-Math.PI/2+(rt()-.5)*.6,f.scale.setScalar(.95+rt()*.25),this.V.scene.add(f),e.objs.push(f);let x={g:f,m:g,p:h,hp:2,st:"rise",y:-10,d:d*.35,ph:rt()*6,jolt:0};return this.hitBox(f,o,4,x),x});let l=new kt,c=new Ee(new en(2.4,18,12,0,Math.PI*2,0,Math.PI/2),new tt({color:9058480,roughness:.4}));c.scale.set(1,1.15,1),l.add(c);for(let h of[-1,1]){let d=new Ee(new en(.62,12,10),this.M.eye);d.position.set(h*.95,1.15,1.85);let f=new Ee(new en(.3,10,8),this.M.pupil);f.position.set(h*.95,1.15,2.4),f.scale.set(.6,1.2,.5),l.add(d,f)}l.position.set(r.x,-4,r.z),l.lookAt(this.V.cam.position.x,-4,this.V.cam.position.z),this.V.scene.add(l),e.objs.push(l),e.head=l,e.ctr=r,this.fx.splash(new ft(r.x,.2,r.z),1.5),this.fx.shock(new ft(r.x,.2,r.z),9,12577535),this.V.shake(.5,.5),$.play("splash"),e.sub=`Tentacles left: ${a.length}`;let u=0;e.upd=h=>{u+=h;let d=this.life.t,f=0;e.head.position.y+=((e.won?-5:-.9)-e.head.position.y)*Math.min(1,h*1.5),e.head.rotation.z=Math.sin(d*1.3)*.06;for(let g of e.T){let x=g.g;g.st==="rise"?u>g.d&&(g.y+=(-.3-g.y)*Math.min(1,h*3.5),g.y>-1&&(g.st="idle"),rt()<h*10&&this.fx.splash(new ft(g.p.x,.2,g.p.z),.5)):g.st==="gone"&&(g.y-=h*14,g.y<-11&&(x.visible=!1)),g.st!=="gone"&&f++,g.jolt=Math.max(0,g.jolt-h*2.5),x.position.set(g.p.x,g.y+jh(g.p.x,g.p.z,d),g.p.z),g.m.rotation.z=Math.sin(d*2.1+g.ph)*.16-g.jolt*Math.sin(g.jolt*30)*.5,g.m.rotation.x=Math.sin(d*1.5+g.ph)*.1,g.st==="idle"&&rt()<h*2&&this.fx.wake(new ft(g.p.x,.05,g.p.z))}e.sub=`Tentacles left: ${f}`,!f&&!e.won&&(e.won=!0,e.winT=.9),e.winT>0&&(e.winT-=h,e.winT<=0&&this.cur===e&&this.end(!0))},e.on=(h,d,f)=>{if(h.st!=="idle")return;h.hp--,h.jolt=1;let g=h.g.position.clone().add(new ft(0,5,0));this.fx.hit(g,.7),$.play("crash"),this.V.shake(.35,.2),this.ui.float(d,f-20,h.hp?"SPLAT!":"BEGONE!",h.hp?"":"big"),h.hp||(h.st="gone",this.fx.splash(new ft(h.p.x,.2,h.p.z),1.2),this.fx.sparkle(g,16,14131455,2),e.lx=d,e.ly=f)},e.fin=(h,d)=>{for(let f of e.T)f.st!=="gone"&&(f.st="gone");if(e.won=!0,e.keep=1500,h){let f=this.G.potential()*70,g=4+Math.floor(rt()*3),x=e.ctr.clone().setY(1),m=this.ui.proj(x.x,2,x.z);this.reward(f,g,m.x,m.y,x),this.ui.toast("\u{1F419} The kraken fled! Its hoard washed ashore.","ms"),$.play("win")}else d||this.ui.toast("\u{1F419} The kraken slipped back into the deep\u2026")}}storm(e){let t=this.spots("water",4,6);if(t.length<3){if(t=[[4,24],[10,29],[16,25],[21,31],[8,34]].map(([o,l])=>new ft(o,0,l)).filter(o=>Ht(o.x,o.z)<-1.6).slice(0,4),t.length<3)return!1;this.V.lock||this.V.focus(new ft(12,0,27),null)}let n=new ln(1.5,1.1,1.1),i=new ln(1.56,.2,1.16),r=new ln(.3,.34,.1),a=new en(2.3,8,6);e.C=t.map(o=>{let l=new kt,c=new Ee(n,this.M.wood);c.castShadow=!0;let u=new Ee(i,this.M.band),h=u.clone();u.position.x=.45,h.position.x=-.45,u.rotation.z=h.rotation.z=Math.PI/2,u.scale.set(.75,1,1),h.scale.set(.75,1,1);let d=new Ee(r,this.M.gold);d.position.set(0,.1,.58),l.add(c,u,h,d),l.scale.setScalar(1.25),l.rotation.y=rt()*6,this.V.scene.add(l),e.objs.push(l);let f={g:l,p:o,ph:rt()*6,st:"in",y:-2};return this.hitBox(l,a,0,f),f}),e.n=e.C.length,e.sub=`Cargo saved: 0/${e.n}`,this.rain.className="on",e.flash=1.2,e.upd=o=>{let l=this.life.t;e.flash-=o,e.flash<=0&&this.cur===e&&(e.flash=2.5+rt()*3,this.rain.classList.remove("fl"),this.rain.offsetWidth,this.rain.classList.add("fl"),setTimeout(()=>$.play("boom",.45),250));for(let c of e.C)c.st==="in"?c.y+=(0-c.y)*Math.min(1,o*2):c.st==="sink"?c.y-=o*2.5:c.st==="up"&&(c.y+=o*9),c.g.position.set(c.p.x+Math.sin(l*.5+c.ph)*.8,c.y+jh(c.p.x,c.p.z,l)*3,c.p.z+Math.cos(l*.4+c.ph)*.6),c.g.rotation.z=Math.sin(l*1.6+c.ph)*.2,c.g.rotation.x=Math.sin(l*1.3+c.ph)*.15,c.st==="in"&&rt()<o*3&&this.fx.wake(new ft(c.g.position.x,.05,c.g.position.z)),c.st!=="in"&&c.y<-3&&(c.g.visible=!1)},e.on=(o,l,c)=>{if(o.st!=="in")return;o.st="up",e.got++;let u=o.g.position.clone();this.fx.sparkle(u,20,16769658,2),this.fx.splash(u,.6),$.play("wood"),$.play("coin");let h=this.G.potential()*14;this.G.addGold(h),this.ui.fly(l,c,6),this.ui.float(l,c-30,`+${dt(h)}`,"big"),setTimeout(()=>{o.g.visible=!1},500),e.sub=`Cargo saved: ${e.got}/${e.n}`,e.got>=e.n&&(e.left=Math.min(e.left,.6),e.full=!0)},e.fin=(o,l)=>{this.rain.className="";for(let c of e.C)c.st==="in"&&(c.st="sink");e.keep=1500,e.full&&!l?(this.S.pearls+=3,this.ui.fly(innerWidth/2,innerHeight*.3,5,"pearl"),this.ui.toast(`\u26C8 Full salvage! Bonus ${Nf} +3`,"ms"),$.play("win"),this.S.st.events=(this.S.st.events||0)+1,this.ctx.save()):l||this.ui.toast(e.got?`\u26C8 The storm passed \u2014 ${e.got}/${e.n} crates saved`:"\u26C8 The storm passed\u2026")}}map(e){let t=this.spots("land",3,7);if(t.length<3)return!1;let n=Math.floor(rt()*3),i=new ln(2.4,.16,.48),r=new An(1.25,1.6,.28,16),a=new en(2.4,8,6);e.X=t.map((o,l)=>{let c=new kt,u=new Ee(r,this.M.sand);u.receiveShadow=!0;let h=new Ee(i,this.M.red),d=new Ee(i,this.M.red);h.rotation.y=Math.PI/4,d.rotation.y=-Math.PI/4,h.position.y=d.position.y=.22,d.position.y=.25,c.add(u,h,d),c.position.copy(o),c.position.y+=.05,this.V.scene.add(c),e.objs.push(c);let f={g:c,p:o,real:l===n,st:"on",ph:rt()*6};return this.hitBox(c,a,.5,f),f}),e.tries=0,e.sub="Dig at the right X (3 tries)",e.upd=o=>{let l=this.life.t;for(let c of e.X)if(c.st==="on"){let u=1+Math.sin(l*4+c.ph)*.08;c.g.scale.set(u,1,u),rt()<o*3&&this.fx.sparkle(c.p.clone().add(new ft(0,.5,0)),1,16769658,1.2,.4)}},e.on=(o,l,c)=>{if(o.st!=="on"||e.found)return;o.st="dug",e.tries++;let u=o.p.clone().add(new ft(0,.4,0));if(this.fx.puff(u,16,15123594,1.4,1.2,1.6,.8),$.play("chop"),o.g.children[1].visible=o.g.children[2].visible=!1,this.pick=this.pick.filter(h=>h.userData.ev!==o),o.real){e.found=!0;let h=[1,.6,.4][e.tries-1],d=this.life.mk("chest");d.position.copy(o.p).add(new ft(0,-1.2,0)),d.scale.setScalar(1.5),d.rotation.y=Math.atan2(this.V.cam.position.x-o.p.x,this.V.cam.position.z-o.p.z),this.V.scene.add(d),e.objs.push(d),e.chest={o:d,y0:o.p.y,t:0},$.play("reveal",2),e.upd=f=>{let g=e.chest;g.t+=f,g.o.position.y=g.y0-1.2+Math.min(1,g.t*1.4)*1.5,g.o.rotation.y+=f*(g.t<.8?3:0),rt()<f*20&&this.fx.sparkle(g.o.position.clone().add(new ft(0,1,0)),1,16769658,1.5,.6)},setTimeout(()=>{if(this.cur!==e)return;let f=this.G.potential()*90*h,g=Math.round(6*h)+1;this.reward(f,g,l,c,e.chest.o.position.clone().add(new ft(0,1.5,0))),$.play("win"),this.ui.toast(e.tries===1?"\u{1F4DC} First try! A full treasure chest!":`\u{1F4DC} Treasure found! (${e.tries} tries)`,"ms"),e.won=1,this.end(!0)},900)}else this.ui.float(l,c-20,"Just sand\u2026"),$.play("deny",.6),e.sub=e.tries>=2?"Last X \u2014 it must be there!":"Wrong X! Try another (smaller chest)"},e.fin=(o,l)=>{e.keep=o?2600:0,!o&&!l&&this.ui.toast("\u{1F4DC} The tide washed the map away\u2026")}}trader(e){let t=this.life.spawnMerchant(!1,{g:this.G.potential()*45,p:5+Math.floor(rt()*4)},"trader");if(!t)return!1;e.ship=t,t.rich=!0,e.upd=n=>{if(!this.life.ships.includes(t)||!t.reward&&t.st!=="in"){e.won=!t.reward,this.end(e.won,!0),e.won&&(this.S.st.events=(this.S.st.events||0)+1);return}rt()<n*14&&this.fx.sparkle(t.o.position.clone().add(new ft((rt()-.5)*3,3+rt()*4,(rt()-.5)*4)),1,12580095,1.5,.7),e.sub=t.st==="dock"?"Tap her to open the jewel chest!":"A jewel trader is sailing in\u2026",e.left=e.d},e.fin=()=>{}}bounty(e){let t=this.S;t.bounty=1,t.raidAt=0;let n=this.life.mk("ghost");n.scale.setScalar(1.3),e.mats=[],n.traverse(i=>{i.isMesh&&(i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=.85,i.material.emissive=new Z(2817946),i.material.emissiveIntensity=.16,e.mats.push(i.material))}),this.V.scene.add(n),e.objs.push(n),e.g=n,e.u=0,e.sub="Tap RAID now: boss fight, \xD72 loot!",e.upd=i=>{e.u+=i/e.d;let r=this.life.t,a=24-e.u*50,o=30;n.visible=!this.raid.on,n.position.set(a,-1+jh(a,o,r)*.5,o),n.rotation.y=-Math.PI/2,n.rotation.z=Math.sin(r*.8)*.04,e.mats.forEach(l=>l.opacity=.6+Math.sin(r*2)*.18),n.visible&&rt()<i*6&&this.fx.sparkle(n.position.clone().add(new ft((rt()-.5)*8,3+rt()*6,(rt()-.5)*3)),1,8257472,1.5,.7),t.bounty||(e.won=!0,this.end(!0,!0))},e.fin=(i,r)=>{i||(t.bounty=0,r||this.ui.toast("\u{1F47B} The Ghost Galleon vanished into the fog\u2026"))},this.ui.toast("\u{1F47B} Ghost Galleon on the horizon! Raid is ready!","ms"),this.V.lock||this.V.focus(new ft(12,0,26),null)}}});var qr,Oy,ky,ar,Uo,Of=Qe(()=>{wt();sr();pi();qr=R,Oy=s=>document.querySelector(s),ky='<img class="ico" src="assets/ui/pearl.webp">',ar=new qr(-6.8,0,18),Uo=class{constructor(e,t,n,i,r,a){this.V=e,this.life=t,this.fx=n,this.G=i,this.S=i.S,this.ui=r,this.ctx=a,this.pick=[],this.o=null,this.id=null,this.t=0;let o=document.createElement("div");o.className="sb pe",o.id="bFleet",o.innerHTML='<img src="assets/ui/fleet_sloop.webp" alt=""><b class="ts">Fleet</b><span class="bdg ts">!</span>';let l=Oy("#bRaid");l.parentNode.insertBefore(o,l.nextSibling),o.onclick=()=>this.open(),this.btn=o,this.sync()}idx(){return Math.min(fi.length-1,this.S.fleet||0)}next(){return fi[this.idx()+1]||null}can(){let e=this.next();return!!e&&this.S.wins>=e.wins&&this.S.pearls>=e.cost}foe(){let e=this.S;return e.bounty?"ghost":ir[e.wins%ir.length]}sync(){let e=this.S,t=fi[this.idx()],n=e.b.shipyard.lv>0;if(this.o&&(this.id!==t.id||!n)&&(this.V.scene.remove(this.o),this.pick=[],this.o=null),n&&!this.o){let i=this.o=this.life.mk(t.id);this.id=t.id,i.scale.setScalar(t.s*.95),i.position.copy(ar),i.rotation.y=-.75,this.V.scene.add(i);let r=new Wt().setFromObject(i).getSize(new qr),a=new Ee(new ln(r.x*1.1/i.scale.x,9,r.z/i.scale.z),new gt({visible:!1}));a.position.y=3,a.userData.fleet=!0,i.add(a),this.pick=[a]}this.btn.style.display=n?"":"none",this.btn.querySelector("img").src=`assets/ui/fleet_${t.id}.webp`}update(e){this.t+=e;let t=this.o;if(t){let n=this.t;t.visible=!document.body.classList.contains("raid"),t.position.y=-.6+Math.sin(n*1.1)*.1,t.rotation.z=Math.sin(n*.8)*.025,t.rotation.x=Math.sin(n*.6+1)*.015}(this.k=(this.k||0)+e)>.25&&(this.k=0,this.btn.classList.toggle("on",this.can()),!!this.o!=this.S.b.shipyard.lv>0&&this.sync())}open(){let e=this.S,t=this.idx(),n=this.foe(),i=Eo[n];$.play("select");let r=(o,l)=>{let c=l<=t,u=l===t,h=l===t+1,d=e.wins<o.wins,f=u?'<button class="btn off">Sailing \u2713</button>':c?'<button class="btn off">Retired</button>':h?d?`<button class="btn off">Win ${o.wins} raids (${e.wins}/${o.wins})</button>`:`<button class="btn ${e.pearls>=o.cost?"gold glow":"off"}" data-i="${l}">Buy ${ky} ${o.cost}</button>`:'<button class="btn off">Locked</button>';return`<div class="fc ${u?"act":""} ${!c&&!h?"lk":""}"><img src="assets/ui/fleet_${o.id}.webp" alt=""><b class="ts">${o.name}</b><small>\u2764 ${o.hp} hull \xB7 \u{1F4A5} \xD7${o.dmg} cannons</small>${f}</div>`};this.ui.modal(`<div class="mt">Your Fleet</div><div class="mb"><p style="margin:.1em 0">A bigger flagship has a tougher hull and heavier cannons in raids.</p>
      <div class="fleet">${fi.map(r).join("")}</div>
      <div class="fnext"><img src="assets/ui/${i.icon}.webp" alt=""><span>Next raid: <b>${i.boss?"BOSS \xB7 ":""}${i.name}</b><br><small>${i.boss?"Fades into the mist, then fires cursed broadsides. Huge loot!":i.tip?"She "+i.tip+".":"A steady black-sail galleon."}</small></span></div></div>`,{cls:"wide"}).querySelectorAll("[data-i]").forEach(o=>o.onclick=l=>this.buy(+o.dataset.i,l.clientX,l.clientY))}buy(e,t,n){let i=this.S,r=fi[e];if(!r||e!==this.idx()+1||i.wins<r.wins||i.pearls<r.cost){$.play("deny");return}i.pearls-=r.cost,i.fleet=e,this.ui.closeModal(),this.sync(),$.play("build"),$.play("win");let a=ar.clone().add(new qr(0,4,0));this.fx.confetti(a,80),this.fx.sparkle(a,40,16769658,4),this.fx.shock(new qr(ar.x,.3,ar.z),10,16769162),this.V.focus(new qr(ar.x+2,0,ar.z-2),null),this.ui.toast(`\u2693 The ${r.name} is your new flagship! \u2764 ${r.hp} \xB7 \u{1F4A5} \xD7${r.dmg}`,"ms"),this.ctx.save()}}});var Wy=$f(()=>{wt();Zd();fh();Qs();vf();Zs();Mf();Sf();Tf();Lf();Df();Uf();Of();Jh();sr();pi();var Ut=R,or=(s,e)=>{let t=document.getElementById("lbar");if(t&&(t.style.width=s*100+"%"),e){let n=document.getElementById("ltxt");n&&(n.textContent=e)}},Bf=()=>{let s=new Date(Date.now()-864e5);return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()},oe,Ve,Ge,Jn,qt,Be,ve,Zn,zf,Oo,$r;async function Fy(){let s=performance.now();or(.05);let e=ut.init();oe=window.V=new mo,lf(Kn);let[t,n,i,r,a,o]=await Promise.all([cf(),js("assets/world.glb"),js("assets/buildings.glb"),js("assets/actors.glb"),js("assets/props.glb"),js("assets/ships.glb"),e].map(y=>y.then(P=>(or(Math.min(.9,(or.n=(or.n||1)+1)/8)),P))));ut.loadingStart(),or(.92,"Raising the flags\u2026"),Ge=Ks.load(),Ve=window.G=new Io(Ge,Date.now());let l=Jd(Kn,t,oe.q),c=l.material.uniforms;c.fogC.value.copy(oe.scene.fog.color),c.fogN.value=oe.scene.fog.near,c.fogF.value=oe.scene.fog.far,oe.scene.add(l),as(n.scene),oe.scene.add(n.scene),zf=n.scene,n.scene.traverse(y=>{y.name==="terrain"&&y.isMesh&&(y.castShadow=!1)}),Jn=new Ao(oe.scene,i),as(r.scene,{still:!1}),Be=new Co(oe,r),qt=new Po(oe,r,a,Be,o),oe.post=new wo(oe),oe.post.setMap({grade:{warm:[1.05,1,.93],cool:[.93,.97,1.06],sat:1.12,con:1.06,vig:.22,bloom:.28,thr:.9}});let u=Vy();ve=new Lo(Ve,oe,Jn,u),Zn=new Do(oe,qt,Be,Ve,ve,u),$r=new Uo(oe,qt,Be,Ve,ve,u),Oo=new No(oe,qt,Be,Ve,ve,Zn,u);let h=()=>{oe.resize();let y=innerHeight*oe.R.getPixelRatio()/(2*Math.tan(oe.cam.fov*Math.PI/360));Be.add.mesh.material.uniforms.scale.value=Be.norm.mesh.material.uniforms.scale.value=y};h(),window.addEventListener("resize",h),Yr(!1),zy(),Be.select(null),qt.onDock=y=>{$.play("bell"),y&&y.rich?ve.toast("\u{1F48E} The rich trader docked \u2014 open the jewel chest!","ms"):y&&y.reward&&y.reward.jack?(ve.toast("\u2728 JACKPOT ship! A golden chest is aboard \u2014 grab it!","ms"),Be.sparkle(y.o.position.clone().add(new Ut(0,4,0)),40,16765498,4)):Ge.q>=4&&ve.toast("\u26F5 A merchant ship docked \u2014 grab the treasure!")},oe.onTap=Hy,Ge.b.market.lv||(oe.goal.set(oe.portrait?-1:-3,0,oe.portrait?-3:2),oe.target.copy(oe.goal),oe.goalDist=oe.dist=oe.portrait?66:52),await By();let d=performance.now(),f=window.__quality={lv:0,n:0,t:0,cool:1.5,every:1,fc:0,down(){let y=oe.R,P=oe.sun;this.lv++,this.lv===1&&(y.getPixelRatio()>1?y.setPixelRatio(1):this.lv++),this.lv===2&&(oe.post.bloom.enabled=!1,P.shadow.mapSize.x>1024&&(P.shadow.mapSize.set(1024,1024),P.shadow.map&&(P.shadow.map.dispose(),P.shadow.map=null)),this.every=2),this.lv===3&&(oe.post.enabled=!1,this.every=4),this.lv===4&&(P.castShadow=!1,y.shadowMap.enabled=!1,oe.scene.traverse(A=>{A.material&&[].concat(A.material).forEach(E=>E.needsUpdate=!0)}),y.setPixelRatio(Math.min(y.getPixelRatio(),.8))),y.shadowMap.autoUpdate=this.every===1,h()},tick(y){if(this.fc++,this.every>1&&this.fc%this.every===0&&(oe.R.shadowMap.needsUpdate=!0),this.lv>=4||y>.5||ut.adActive||document.hidden){this.n=this.t=0;return}if(this.cool-=y,!(this.cool>0)&&(this.n++,this.t+=y,this.t>=2)){let P=this.n/this.t;this.n=this.t=0,P<42&&(this.down(),this.cool=1)}}},g=window.__ft=[],x=performance.now(),m=y=>{f.tick(y),performance.now()-x<5e3&&g.push(Math.round(y*1e3))},p=()=>{let y=performance.now(),P=(y-d)/1e3,A=Math.min(Gy,P);d=y,m(P),Qh(A),requestAnimationFrame(p)};if(cn.get("cap")){let y=[],P=window.clearTimeout,A=0,E=1e6;window.setTimeout=(W,v,...S)=>{let F=E++;return y.push({id:F,t:A+(+v||0)/1e3,f:W,a:S}),F},window.clearTimeout=W=>{let v=y.findIndex(S=>S.id===W);v>=0?y.splice(v,1):P(W)};let N=W=>{for(A+=W;y.sort((S,F)=>S.t-F.t),!(!y.length||y[0].t>A);){let v=y.shift();try{typeof v.f=="function"&&v.f(...v.a)}catch(S){console.error(S)}}};window.__step=(W,v)=>{for(let S=0;S<W;S++)Qh(v||1/30,S===W-1),N(v||1/30)},Qh(1/30)}else p();ut.loadingStop(),or(1);let w=document.getElementById("boot");w.style.opacity=0,setTimeout(()=>w.remove(),650),window.__ready=!0,window.__boot=performance.now()-s,ut.gameplayStart();let b=()=>{$.init(),$.apply()};window.addEventListener("pointerdown",b),window.addEventListener("keydown",b),ut.onMute=()=>$.apply(),ut.onPause=()=>$.pause(!0),ut.onResume=()=>$.pause(!1),document.addEventListener("visibilitychange",()=>{document.hidden?(hn(),ut.gameplayStop(),$.ctx&&$.ctx.suspend()):(ut.gameplayStart(),$.ctx&&!$.sdkPaused&&$.ctx.resume(),kf())}),window.addEventListener("pagehide",hn),setInterval(hn,5e3),u.d=dh(),u.yest=Bf(),Ve.day(u.d),setTimeout(kf,700),window.__game={G:Ve,ui:ve,life:qt,fx:Be,town:Jn,raid:Zn,V:oe,S:Ge,ctx:u,Save:Ks,events:Oo,fleet:$r}}async function By(){let s=[...["sloop","enemy","brig","frigate","corsair","ghost","galleon","trader"].map(t=>qt.mk(t)),new Ee(new en(.3,8,6),new tt({color:1710618,metalness:.6,roughness:.4})),new Ee(Be.shockG,new gt({color:16777215,transparent:!0,depthWrite:!1,opacity:.8}))];s.forEach((t,n)=>{t.position.set(oe.target.x+n*3,-30,oe.target.z),oe.scene.add(t)});try{oe.R.extensions.has("KHR_parallel_shader_compile")?await Promise.race([oe.R.compileAsync(oe.scene,oe.cam),new Promise(t=>setTimeout(t,2500))]):oe.R.compile(oe.scene,oe.cam)}catch{}let e=new Set;oe.scene.traverse(t=>{t.material&&[].concat(t.material).forEach(n=>{for(let i in n){let r=n[i];if(r&&r.isTexture&&!e.has(r)){e.add(r);try{oe.R.initTexture(r)}catch{}}}})}),oe.post&&oe.post.enabled?oe.post.render():oe.R.render(oe.scene,oe.cam),s.forEach(t=>oe.scene.remove(t))}var tn={ship:35,bottle:100,acc:{},accT:0,lastAd:0};function hn(){Ge&&(Ge.last=Date.now(),Ks.save())}function kf(){let s=Ve.offline(Date.now()),e=ve.ctx,t=()=>{Ve.streakState(dh(),Bf())&&Ge.q>=3&&!ve.modalOpen&&!cn.get("cap")&&!document.body.classList.contains("raid")&&ve.missions()};s&&s.gold>0?ve.offline(s,(n,i,r)=>{let a=o=>{Ve.addGold(s.gold*o),ve.fly(i,r,14),$.play("coins"),hn(),t()};n?ut.ad("rewarded",o=>a(o?2:1)):a(1)}):t()}function lr(s,e=2){let t=Ct[s];return new Ut(t.x,t.h+e,t.z)}function Yr(s=!0){for(let n of st){let i=Ge.b[n.id],r=n.zone!==2||Ge.bridge;Jn.g[n.id].visible=r,Jn.set(n.id,i.lv?Xr(i.lv):0,s)}zf.traverse(n=>{n.name==="bridge"&&(n.visible=!!Ge.bridge)}),qt.mineGold&&(qt.mineGold.visible=!!Ge.bridge);let e=st.filter(n=>Ge.b[n.id].lv>0).map(n=>n.id),t=Object.keys(Ge.crew).length;qt.setCrowd(Math.min(14,3+e.length+Math.floor(t/2)),e)}function zy(){Ve.on("gold",(s,e)=>{if(!Ct[e])return;if(Ge.b[e].m)tn.acc[e]=(tn.acc[e]||0)+s;else{let n=lr(e,3);Be.coinBurst(n,6,7);let i=ve.proj(n.x,n.y,n.z);i.ok&&ve.fly(i.x,i.y,4),ve.floatAt(n.clone().add(new Ut(0,2,0)),`+${dt(s)}`),$.play("coin",.7)}}),Ve.on("buy",(s,e)=>{let t=lr(s,1);e.built?(Jn.set(s,1,!0),Be.puff(t,18,15324852,2.2,1.4,3.5),Be.confetti(t.clone().add(new Ut(0,4,0)),40),Be.shock(new Ut(t.x,t.y-.8,t.z),Ct[s].r*1.6,16769162),$.play("build"),oe.shake(.25,.25),ve.toast(`\u{1F3D7}\uFE0F ${st[Et[s]].name} built!`),Yr(!1),ut.happytime()):e.tier?(Jn.set(s,e.tier,!0),Be.puff(t,14,15324852,2,1.4,3),Be.sparkle(t.clone().add(new Ut(0,3,0)),30,16769658,3),Be.shock(new Ut(t.x,t.y-.8,t.z),Ct[s].r*1.6,16769162),$.play("tier"),ve.toast(`\u2728 ${st[Et[s]].name} upgraded!`,"ms"),oe.shake(.2,.2)):(Be.sparkle(t.clone().add(new Ut(0,2,0)),8,16769658,2),$.play("buy",.7)),e.ms&&(ve.toast(`\u{1F4B0} ${st[Et[s]].name}: profit \xD72!`,"ms"),$.play("milestone"))}),Ve.on("hire",s=>{let e=lr(s,5);Be.confetti(e,24),$.play("confirm"),ve.toast(`\u{1F3F4}\u200D\u2620\uFE0F First Mate hired at the ${st[Et[s]].name}!`)}),Ve.on("questDone",()=>{$.play("unlock")}),Ve.on("mission",s=>{ve.toast(`\u{1F4DC} Mission done: ${s.t.replace("{n}",dt(s.n))}`,"ms"),$.play("unlock")})}function Hy(s,e,t){if(Zn.on||ve.modalOpen||($.init(),Oo.tap(s,e,t)))return;let n=s.intersectObjects([...qt.pick,...$r.pick,...Jn.pick],!1);for(let r of n){let a=r.object.userData;if(a.ship){a.ship.reward&&Vf();return}if(a.bottle){Gf(e,t);return}if(a.fleet){$r.open();return}if(a.id&&Jn.g[a.id].visible){Hf(a.id,e,t);return}}let i=new Ut;if(s.ray.intersectPlane(new gn(new Ut(0,1,0),-1),i)&&!Ge.bridge&&Ge.b.lighthouse.lv&&Math.abs(i.z+9)<3&&i.x>24&&i.x<34){ve.ctx.tapBridge();return}ve.close(),Be.select(null)}function Hf(s,e,t){if($.init(),Ge.b[s].lv){let i=Ve.tap(s),r=lr(s,2.5);i==="start"?($.play("tap"),Be.sparkle(r,8,16777215,1.5)):i==="hurry"&&($.play("click",.6),Be.sparkle(r,5,16769658,1.2,.4),ve.floatAt(r.clone().add(new Ut(0,2.5,0)),"\u26A1","green"))}else $.play("select");ve.sel!==s&&(ve.open(s),Be.select(Ct[s],Ct[s].r),oe.focus(new Ut(Ct[s].x+(innerWidth/innerHeight>1.3?5:0),0,Ct[s].z+(oe.portrait?9:3)),null))}function Vf(){let s=qt.ships.find(i=>i.kind==="merchant"&&i.reward);if(!s)return;let e=s.reward;s.reward=null,s.wait=Math.min(s.wait,2.5);let t=s.o.position.clone().add(new Ut(0,3,0));Ve.addGold(e.g),e.p&&(Ge.pearls+=e.p),Ge.st.ships++,Ve.mis("ship",1),Ve.qtick("ship"),Be.coinBurst(t,e.jack?60:24,10),Be.sparkle(t,30,16769658,3),e.jack&&(Be.confetti(t.clone().add(new Ut(0,2,0)),70),$.play("win"),oe.shake(.35,.3),ve.toast("\u2728 JACKPOT! \xD75 golden chest!","ms")),Be.shock(new Ut(t.x,.3,t.z),6,16769162),$.play("open"),$.play("coins"),oe.shake(.15,.2);let n=ve.proj(t.x,t.y,t.z);ve.float(n.x,n.y-30,`<img class="ico" src="assets/ui/coin.webp">+${dt(e.g)}`,"big"),ve.fly(n.x,n.y,12),e.p&&(ve.fly(n.x,n.y,5,"pearl"),setTimeout(()=>ve.float(n.x,n.y-70,`<img class="ico" src="assets/ui/pearl.webp">+${e.p}`,"pearl"),300)),hn()}function Gf(s,e){let t=qt.takeBottle();if(!t)return;Ge.st.bottles++,$.play("glass"),$.play("reveal",1),Be.sparkle(t,30,11075535,2.5),Be.splash(t,.6);let n=Math.random();if(n<.45)Ve.frenzy=20,Ve.frenzyM=5,ve.toast("\u{1F37E} Lucky message! \xD75 income for 20s!","ms");else if(n<.8){let i=Ve.potential()*60;Ve.addGold(i),ve.fly(s,e,12),ve.float(s,e-30,`+${dt(i)}`,"big"),ve.toast("\u{1F37E} A sunken purse!")}else Ge.pearls+=5,ve.fly(s,e,5,"pearl"),ve.toast("\u{1F37E} Pearls from the deep! +5")}function Vy(){return{tapBuilding:Hf,openChest:Vf,takeBottle:Gf,dockedShip:()=>qt.ships.find(s=>s.st==="dock"&&s.reward),buy(s,e,t,n){Ve.buy(s,e)?(hn(),ve.panelRefresh()):$.play("deny")},hire(s,e,t){Ve.hire(s)?(ve.panelRefresh(),hn()):$.play("deny")},tapBridge(){if(Ve.buyBridge()){Yr(!1);let s=new Ut(29,1.5,-9);Be.puff(s,30,15786696,3,1.4,5),Be.confetti(s.clone().add(new Ut(0,3,0)),80),$.play("build"),$.play("win"),ve.toast("\u{1F309} Bridge to Skull Isle built!","ms"),oe.focus(new Ut(38,0,-6),null),ut.happytime(),hn()}else $.play("deny"),ve.toast(`Need ${dt(5e7)} gold for the bridge`)},claimQuest(){let s=Ve.claimQuest();if(!s)return;let e=document.getElementById("qClaim").getBoundingClientRect(),t=e.left+e.width/2,n=e.top;s.g&&ve.fly(t,n,10),s.p&&ve.fly(t,n,6,"pearl"),$.play("confirm"),$.play("coins"),hn()},raidCd:()=>Math.max(0,120-(Date.now()-Ge.raidAt)/1e3),raid(){if(!Ge.b.shipyard.lv){$.play("deny");return}if(this.raidCd()>0){$.play("deny"),ve.toast("The crew is repairing the ship\u2026");return}ve.close(),ve.modalOpen&&ve.closeModal(),Be.select(null),Zn.start()},afterRaid(s){hn(),s||Ff()},rum(){ut.ad("rewarded",s=>{if(!s){ve.toast("Ad not available \u2014 try again later");return}Ge.rum=Math.min(1800,Ge.rum+300),Ve.mis("boost",1),$.play("win"),ve.toast("\u{1F379} Rum Rush! \xD72 income","ms"),Be.confetti(oe.target.clone().add(new Ut(0,6,0)),60),hn()})},pull(){let s=Ve.pull();if(!s){$.play("deny");return}ve.closeModal(),$.play("reveal",s.c.r),s.c.r>=2&&$.play("win"),s.c.r===3&&ut.happytime(),ve.reveal(s,()=>this.pull()),Yr(!1),hn()},prestige(){let s=Ve.prestige();s&&(ve.closeModal(),ve.close(),Yr(!0),Be.confetti(oe.target.clone().add(new Ut(0,8,0)),120),$.play("win"),ut.happytime(),ve.toast(`\u2605 You are a Pirate Legend! +${s} stars`,"ms"),hn(),setTimeout(Ff,1500))},save:hn,modal:()=>{},onClose:()=>{Be.select(null),oe.portrait&&!oe.lock&&(oe.goal.z-=5,oe.clamp())},handTarget(){if(Ge.legends||Ge.q>3||Zn.on)return null;let s=Ve.quest();if(!s||ve.modalOpen)return null;let[e,t]=Ve.qProgress();if(e>=t)return{el:document.getElementById("qClaim")};let n=r=>ve.labels[r],i=()=>document.getElementById("pBuy");return s.k==="collect"?Ge.b.dock.run?null:{el:n("dock").tap}:s.k==="level"?Ge.gold<Ve.cost(s.b,1)?null:ve.sel===s.b?{el:i()}:{el:Ge.b[s.b].lv?n(s.b).lv:n(s.b).sign}:s.k==="mgr"?Ge.gold<st[Et[s.b]].mgr?null:ve.sel===s.b?{el:document.getElementById("pHire")}:{el:n(s.b).lv}:null}}}function Ff(){let s=Date.now();if(s-tn.lastAd<18e4||!ut.ready&&!cn.get("adtest"))return;tn.lastAd=s;let e=document.createElement("div");e.id="adwarn",(document.getElementById("ui")||document.body).appendChild(e);let t=3,n=()=>{if(t<=0){e.remove(),ut.ad("midgame",()=>{});return}e.innerHTML=`<div class="ts">Ad break in <b>${t}</b>\u2026</div><small>Thanks for supporting the game!</small>`,e.classList.remove("tick"),e.offsetWidth,e.classList.add("tick"),t--,setTimeout(n,1e3)};n()}var Gy=cn.get("ts")?.3:.05;function Qh(s,e=!0){Kn.time.value+=s;let t=Kn.time.value;if(ut.adActive||Ve.update(s),Kn.boost.value+=((Ve.frenzy>0?1:0)-Kn.boost.value)*Math.min(1,s*3),tn.ship-=s,tn.ship<=0&&!Zn.on){tn.ship=40+Math.random()*30;let n=Ge.b.lighthouse.lv>0,i=Ve.potential()*25*(1+Ve.crewFx("ship"))*(n?1.5:1),r=Ge.q===5||Math.random()<.3?2+Math.floor(Math.random()*3):0,a=Ge.q>=6&&Math.random()<.12;qt.spawnMerchant(n,a?{g:i*5,p:r+5,jack:1}:{g:i,p:r})}if(Ge.q>=6&&(tn.bottle-=s,tn.bottle<=0&&(tn.bottle=90+Math.random()*60,qt.spawnBottle())),tn.accT+=s,tn.accT>1.3){tn.accT=0;for(let n in tn.acc){let i=tn.acc[n];if(i>0&&!Zn.on){let r=lr(n,3);Math.random()<.7&&Be.coinBurst(r,2,5),ve.floatAt(lr(n,5),`+${dt(i)}`)}tn.acc[n]=0}}qt.update(s),Jn.update(s),Be.update(s,t),Zn.update(s);for(let n of qt.ships)n.o.visible=!Zn.on;$r.update(s),ut.adActive||Oo.update(s),oe.update(s),ve.update(s),e&&oe.render()}Fy().catch(s=>{console.error(s);let e=document.getElementById("ltxt");e&&(e.textContent="Failed to load \u2014 please refresh")})});Wy();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
