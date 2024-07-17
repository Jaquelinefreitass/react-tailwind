import Caixa from "@/components/Caixa";

export default function BoxSizing() {
    return(
         <div className="flex flex-col gap-5">
            <Caixa className="w-36">#1</Caixa>
            <Caixa className="w-36 h-36 border-8 border-black box-content">#2</Caixa>

         </div>

    )
}