interface PhoneMockupProps {
  className?: string;
  screenshot: string;
}

export default function PhoneMockup({ className = "", screenshot }: PhoneMockupProps) {
  return (
    <img 
      src={screenshot} 
      alt="FirePath App Screenshot" 
      className={`w-4/5 h-auto mx-auto ${className}`}
      data-testid="phone-mockup"
    />
  );
}
