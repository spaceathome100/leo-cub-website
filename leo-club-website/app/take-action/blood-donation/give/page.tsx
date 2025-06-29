import DonorForm from "@/components/DonorForm";

export default function GiveBloodPage() {
  return (
    <main className="pt-[200px] pb-20 px-4 bg-white text-leoBlue">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">Become a Blood Donor</h1>
      <p className="text-center text-lg mb-10">
        Fill out this form to join our blood donor registry and help save lives.
      </p>
      <DonorForm />
    </main>
  );
}
