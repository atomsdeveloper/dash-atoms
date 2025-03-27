import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingContext } from "@/context/loading";
import React from "react";
import Loading from "./loading";
import { Car } from "lucide-react";

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
  const {
    loading,
  } = React.useContext(LoadingContext);
  
  return (
      <Card className={`flex flex-col gap-1 rounded-xl bg-muted/50 ${bgColorDiv} md:w-[170px] h-[170px] p-3`}>
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${bgColorIcon}`}>
          <Icon size={18} color="white" />
        </div>
        <CardHeader className="p-2 space-y-3 h-full flex-1">
       {loading ? (
          <Loading />
        ) : (
          <>
            <CardTitle>{data[0]?.totalProduct ? data[0]?.totalProduct : data.length}</CardTitle>
            <CardDescription>{title}</CardDescription>
            <p className="text-[10px]">{desc}</p>
          </>
        )}
        </CardHeader>
      </Card>
    );
};

export default Summary;
