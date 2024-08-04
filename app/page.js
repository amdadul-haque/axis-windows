import { Hero, InquiryForm, WhyReplacement, WindowOptions } from "@/components";

export default function Home() {


  return (
    <main className="text-black-2 leading-normal font-paragraph">
      <Hero />
      <InquiryForm />
      <WindowOptions />
      <InquiryForm />
      <WhyReplacement />
    </main>
  );
}
