function ContactUsForm() {
  return (
    <div className="bg-neutral-50 py-4 shadow-sm">
      <form className="w-full max-w-3xl mx-auto my-4 text-publicsans">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-[#000] text-base font-semibold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="rounded-lg appearance-none block w-full text-[#000] text-base font-semibold border py-4 px-8 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-base placeholder:font-normal"
              id="grid-first-name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block  tracking-wide text-[#000] text-base font-semibold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="rounded-lg appearance-none block w-full  text-[#000] text-base font-semibold border border-gray-200 py-4 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-base placeholder:font-normal"
              id="grid-last-name"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-[#000] text-base font-semibold mb-2"
              htmlFor="grid-subject"
            >
              Subject
            </label>
            <input
              className="rounded-lg appearance-none block w-full text-[#000] text-base font-semibold border py-4 px-8 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:font-normal placeholder:text-base"
              id="grid-first-name"
              type="text"
              placeholder="Provide Context"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block  tracking-wide text-[#000] text-base font-semibold mb-2"
              htmlFor="grid-subject"
            >
              Subject
            </label>
            <input
              className="rounded-lg appearance-none block w-full text-[#000] text-base font-semibold border border-gray-200 py-4 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-base placeholder:font-normal"
              id="grid-last-name"
              type="text"
              placeholder="Select Subject"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block tracking-wide text-[#000] text-base font-semibold mb-2"
              htmlFor="grid-text-area"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full  text-[#000] text-base font-semibold border border-gray-200 rounded-lg py-4 px-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none placeholder:text-base placeholder:font-normal"
              id="message"
              placeholder="Write your questions here"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center justify-end">
          <button
            className="shadow bg-secColor hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-semibold py-3.5 px-12 rounded-full text-lg"
            type="button"
          >
            Send Message
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </form>
    </div>
  );
}

export default ContactUsForm;
