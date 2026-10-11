export default function CrownMark({ className = "w-5 h-5" }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M3 8l3 9h12l3-9-6 5-3-6-3 6-6-5z"
          stroke="#E52532"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }