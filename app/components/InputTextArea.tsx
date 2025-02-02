interface Props {
  name: string;
  id: string;
  className?: string;
}

export default function InputTextArea({ name, id, className }: Props) {
  return (
    <div>
      <label htmlFor={id} className="hidden">
        {name}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={name + "*"}
        className={`w-full border border-primary px-[12px] py-[8px] ${className}`}
      />
    </div>
  );
}
