interface PhoneMockupProps {
  className?: string;
  screenshot: string;
}

export default function PhoneMockup({ className = "", screenshot }: PhoneMockupProps) {
  return (
    <img 
      src={screenshot} 
      alt="FirePath App Screenshot" 
      className={`w-[80%] h-auto shadow-md ${className}`}
      data-testid="phone-mockup"
    />
  );
}
