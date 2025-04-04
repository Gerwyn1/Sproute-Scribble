type CardWrapperProps = {
  children: React.ReactNode;
  cardTitle: string;
  backButtonHref: string;
  backButtonLabel: string;
  showSocials?: boolean;
};

export default function AuthCard({
  children,
  cardTitle,
  backButtonText,
  backButtonLabel,
  showSocials,
}: CardWrapperProps) {
  return <div>auth-card</div>;
}