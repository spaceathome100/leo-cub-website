import Section from "@/components/Section";

export default function TakeAction() {
  return (
    <>
      <Section title="Take Action – Help Save Lives">
        <p className="pb-8 max-w-xl mx-auto text-center text-gray-700">
          Choose an option below to request blood or register as a donor.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="#need" className="btn-primary w-full md:w-64">I Need Blood</a>
          <a href="#give" className="btn-secondary w-full md:w-64">I Want to Donate</a>
        </div>
      </Section>
      <Section id="need" title="Request Blood" subtitle="Fill in patient details">
        {/* Replace with functional form component */}
        <p className=" text-center text-gray-500">coming soon</p>
      </Section>
      <Section id="give" title="Become a Donor" subtitle="Register & save lives">
        {/* Replace with donor registration form */}
        <p className=" text-center text-gray-500">coming soon</p>
      </Section>
    </>
  );
}
