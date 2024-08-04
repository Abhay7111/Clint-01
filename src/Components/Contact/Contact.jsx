import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
     <div className="bg-img-gray w-full">
          <div className=" w-full flex bg-white/70 flex-col items-center py-10">
               <h1 className=" text-4xl font-medium text-center w-fit px-5 py-1.5 mb-5 bg-gradient-to-tr from-orange-400 p-3 rounded-xl gap-2 to-orange-300 text-zinc-50">Contact Us</h1>
          <form onSubmit={onSubmit} className="w-fit bg-gradient-to-tr from-orange-400 p-3 rounded-xl gap-2 to-orange-300 flex flex-col items-center">
               <label htmlFor="" className="w-96 px-4 text-zinc-800 font-medium">Name</label>
               <input required className="h-8 rounded-md border-orange-200 outline-orange-600 w-96 px-3 py-1.5 text-sm" placeholder="Name" type="text" name="name"/>
               <label htmlFor="" className="w-96 px-4 text-zinc-800 font-medium">Email</label>
               <input required className="h-8 rounded-md border-orange-200 outline-orange-600 w-96 px-3 py-1.5 text-sm" placeholder="Email" type="email" name="email"/>
               <label htmlFor="" className="w-96 px-4 text-zinc-800 font-medium">Phone number</label>
               <input required className="h-8 rounded-md border-orange-200 outline-orange-600 w-96 px-3 py-1.5 text-sm" placeholder="Phone number" type="tel" name="phone"/>
               <label htmlFor="" className="w-96 px-4 text-zinc-800 font-medium">Message</label>
               <textarea required className="h-20 border border-orange-200 rounded-md outline-orange-600 w-96 px-3 py-1.5 text-sm" placeholder="message" name="message"></textarea>
               <button type="submit" className=" px-5 py-1.5 bg-gradient-to-r hover:bg-gradient-to-l transition-slow border border-orange-500 from-orange-400 to-orange-300 rounded-md">Submit Form</button>
          </form>
     </div>
     </div>
  );
}

export default Contact;