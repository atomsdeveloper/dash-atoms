import { Separator } from "@/components/ui/separator";

interface SeparatorProps {
    text: string
}

const SeparatorComponent = ({text}: SeparatorProps) => {
    return ( 
        <div className="flex w-[90%] items-center justify-center">
        <Separator className="w-[30%]" />
        <p className="flex-1 px-2 text-center text-xs opacity-50">
          {text.toLocaleUpperCase()}
        </p>
        <Separator className="w-[30%]" />
      </div>
     );
}
 
export default SeparatorComponent;