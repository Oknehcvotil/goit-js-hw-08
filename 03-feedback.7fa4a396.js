!function(){var e={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},t="feedback-form-state";e.form.addEventListener("input",(function(e){a[e.target.name]=e.target.value,localStorage.setItem(t,JSON.stringify(a))})),e.form.addEventListener("submit",(function(e){e.preventDefault();var a=localStorage.getItem(t),r=JSON.parse(a);console.log(r),e.currentTarget.reset(),localStorage.removeItem(t)}));var a={};!function(){var a=localStorage.getItem(t);if(a){var r=JSON.parse(a);e.input.value=r.email,e.textarea.value=r.message}}()}();
//# sourceMappingURL=03-feedback.7fa4a396.js.map
