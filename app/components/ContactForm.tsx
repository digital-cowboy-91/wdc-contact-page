import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

export default function ContactForm() {
  return (
    <div className="flex flex-col gap-[10px]">
      <h2>How can we help you?</h2>
      <p>We'll get back to you with a response as soon as possible.</p>
      <form className="flex flex-col gap-[10px] mt-[30px] mb-[40px]">
        <InputText name="Full name" id="name-2" />
        <InputText name="Email address" id="email-2" />
        <InputTextArea
          name="Your message"
          id="field"
          className="min-h-[150px]"
        />
        <p>
          *Your personal information will be used to contact you in relation to
          this enquiry only and won’t be used for marketing purposes or shared
          with third parties.
        </p>
        <div>
          <button
            type="submit"
            className="min-w-[150px] py-[4px] mt-[30px] bg-primary text-background"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        <p>
          <strong>WDC Creative,</strong>
          <br />
          1st Floor, Studio 14,
          <br />
          14 Little Lever Street,
          <br />
          Manchester UK, M1 1HR
          <br />
          <br />
        </p>
        <a href="tel:+44(0)1618326111">+44(0)1618326111</a>
        <br />
        <a href="hello@wdc-creative.com">hello@wdc-creative.com</a>
      </div>
    </div>
  );
}
