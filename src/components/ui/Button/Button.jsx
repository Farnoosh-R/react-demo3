import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", to, type }) => {
  const base =
    "px-4 py-2 rounded-lg font-medium justify-center w-fit items-center hover:brightness-90 inline-flex cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--brand-primary)] text-white shadow-lg shadow-orange-300/50",

    secondary: "bg-[var(--brand-deep)] text-white shadow-lg shadow-2xl",

    pastel: "bg-gradient-to-r from-[#f09f49] to-[#e58411] text-lg text-white px-6 py-4 shadow-2xl",
    accent: "bg-[var(--brand-accent)] text-white shadow-lg shadow-orange-300/50",
    glow: "bg-[var(--brand-glow)] text-white shadow-lg shadow-2xl",
  };

  const outlineVariants = {
    primary:
      "border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white",

    secondary:
      "border border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white",

    pastel:
      "border border-[#FF7D68] text-[#FF7D68] hover:bg-gradient-to-r hover:from-[#FF946D] hover:to-[#FF7D68] hover:text-white",
      accent: "border border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-white"
  };

  // const className = `${base} ${variants[variant]}`;
  const className =
    type === "outline"
      ? `${base} ${outlineVariants[variant]}`
      : `${base} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
};

export default Button;
