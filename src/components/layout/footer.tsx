import PaymentLogo from "@/assets/payment-logo.png";
export default function Footer() {
  return (
    <footer className="mt-24 mx-auto py-2 bg-gray-100">
      <section className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <p className="font-thin text-sm">© Copyright Travela 2024</p>
        <div className="text-sm space-y-2">
          We accept:
          <img src={PaymentLogo} className="h-6" />
        </div>
      </section>
    </footer>
  );
}
