interface Props {
  name: string;
  id: string;
}

export default function InputText({ name, id }: Props) {
  return (
    <div>
      <label htmlFor={id} className="hidden">
        {name}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        placeholder={name + "*"}
        className="w-full border border-primary px-[12px] py-[8px]"
      />
    </div>
  );
}
