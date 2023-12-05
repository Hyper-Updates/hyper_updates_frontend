"use client"
import { FaCheck } from "react-icons/fa";

type stepInfo = {
    label: string;
    step: number;
}
type StepProgress = {
    currentStep: number;
    steps: stepInfo[];
}


const StepProgress: React.FC<StepProgress> = (props) => {
    
    const width = `${Math.floor((100 / (props.steps.length - 1)) * (props.currentStep - 1))}%`;

    return (
        <div className='max-w-[600px] mx-auto'>
            <div className={`flex flex-row relative -z-10 justify-between w-full 
            before:content-[" "] before:absolute before:bg-[#f3e7f3] before:h-2 before:w-[100%] before:max-w-[600px] before:left-0 before:top-1/2 before:-translate-y-1/2
            after:content-[" "] after:absolute after:bg-[#4a154b] after:h-2 after:w-[${width}] after:max-w-[600px] after:left-0 after:top-1/2 after:-translate-y-1/2`}>
                {
                    props.steps.map((step) => (
                        <div className='relative z-10'>
                            <div className={`border-2 ${step.step > props.currentStep ? "border-[#f3e7f3] text-[#f3e7f3]":"border-[#4a154b] text-[#4a154b]"} bg-white w-6 h-6 font-semibold text-sm flex justify-center items-center rounded-full`}>
                                {step.step < props.currentStep?
                                <FaCheck /> : <div>{step.step}</div>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { StepProgress };