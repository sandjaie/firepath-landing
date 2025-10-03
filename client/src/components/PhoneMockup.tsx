interface PhoneMockupProps {
  className?: string;
  screenshot: string;
}

export default function PhoneMockup({ className = "", screenshot }: PhoneMockupProps) {
  return (
    <img 
      src={screenshot} 
      alt="FirePath App Screenshot" 
      className={`w-full h-auto ${className}`}
      data-testid="phone-mockup"
    />
  );
}
