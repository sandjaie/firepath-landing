interface PhoneMockupProps {
  className?: string;
  screenshot?: string;
}

export default function PhoneMockup({ className = "", screenshot }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`} data-testid="phone-mockup">
      {screenshot ? (
        <div className="relative w-full max-w-[280px] mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img 
            src={screenshot} 
            alt="FirePath App Screenshot" 
            className="w-full h-auto scale-110"
            style={{ marginTop: '-5%', marginBottom: '-5%' }}
          />
        </div>
      ) : (
        <div className="relative aspect-[9/19.5] w-full max-w-[300px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-[3rem] shadow-2xl border-8 border-foreground/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground/10 rounded-b-3xl" />
            
            <div className="absolute inset-4 flex items-center justify-center bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/5 rounded-[2.5rem]">
              <div className="text-center px-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Screenshot Placeholder
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Upload your app screenshot here
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
