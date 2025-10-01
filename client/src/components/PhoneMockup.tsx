interface PhoneMockupProps {
  className?: string;
  screenshot: string;
}

export default function PhoneMockup({ className = "", screenshot }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`} data-testid="phone-mockup">
      <div className="relative w-full max-w-[280px] mx-auto">
        <img 
          src={screenshot} 
          alt="FirePath App Screenshot" 
          className="w-full h-auto rounded-[2.5rem] shadow-2xl"
        />
      </div>
    </div>
  );
}
