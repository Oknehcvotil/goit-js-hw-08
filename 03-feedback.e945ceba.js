const e={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};e.form.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.form.addEventListener("submit",(function(e){e.preventDefault();const t=localStorage.getItem("feedback-form-state");let a={};t&&(a=JSON.parse(t));if(!a.message||!a.email)return void alert("Fill all fields");console.log(a),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));let t={};!function(){const t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);e.input.value=a.email,e.textarea.value=a.message}}();
//# sourceMappingURL=03-feedback.e945ceba.js.map
