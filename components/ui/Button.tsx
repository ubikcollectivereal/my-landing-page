// components/ui/Button.tsx
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils'; // cn 유틸리티 함수 (선택 사항)

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-white text-blue-600 hover:bg-gray-100",
        secondary: "bg-blue-600 text-white hover:bg-blue-700 border border-white",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2 text-base",
        lg: "h-11 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonAsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: undefined;
}

interface ButtonAsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const commonClasses = cn(buttonVariants({ variant, size, className }));

  if (href) {
    const linkProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={commonClasses} {...linkProps} />
    );
  } else {
    const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={commonClasses} {...buttonProps} />
    );
  }
}
