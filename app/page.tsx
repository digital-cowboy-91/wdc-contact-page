import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";
import PageHeader from "./components/PageHeader";

export default function Home() {
  return (
    <div className="">
      <PageHeader />
      <section className="grid md:grid-cols-2 gap-[40px] px-[40px] py-[60px]">
        <ContactForm />
        <ContactMap />
      </section>
    </div>
  );
}
