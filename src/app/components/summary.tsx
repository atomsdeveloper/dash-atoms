interface SummaryProps {
  bgColorDiv: string;
  bgColorIcon: string;
  icon: React.ElementType;
  data: object[];
  title: string;
  desc: string;
}

const Summary = ({
  bgColorDiv,
  bgColorIcon,
  icon: Icon,
  data,
  title,
  desc,
}: SummaryProps) => {
  return (
    <div
      className={`flex flex-col gap-1 rounded-xl bg-muted/50 ${bgColorDiv} p-4`}
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${bgColorIcon}`}
      >
        <Icon size={18} color="white" />
      </div>
      <h1 className="text-lg">{data.length}</h1>
      <h3 className="text-[12px] opacity-70 lg:text-sm">{title}</h3>
      <span className="text-[10px] text-blue-800">{desc}</span>
    </div>
  );
};

export default Summary;
