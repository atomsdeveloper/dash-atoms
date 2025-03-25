import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  console.log(data)
  return (
    <Card className={`flex flex-col gap-1 rounded-xl bg-muted/50 ${bgColorDiv} w-full p-3`}>
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${bgColorIcon}`}>
        <Icon size={18} color="white" />
      </div>
      <CardHeader className="p-2 space-y-3">
        <CardTitle>{data[0]?.totalProduct ? data[0]?.totalProduct : data.length}</CardTitle>
        <CardDescription>{title}</CardDescription>
        <p className="text-[10px]">{desc}</p>
      </CardHeader>
  </Card>
  );
};

export default Summary;
