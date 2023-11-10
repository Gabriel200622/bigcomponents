import { ModeToggle } from "@/components/mode-toggle";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-[1400px] mx-auto py-6">
        <ModeToggle />
      </div>
    </footer>
  );
};

export default Footer;
