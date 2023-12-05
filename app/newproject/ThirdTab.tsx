import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React from 'react'

type ThirdTabProps = {
    currentStep: number;
    updateCurrentStep: (newStep: number) => void;
};

const ThirdTab: React.FC<ThirdTabProps> = (props) => {
    return (
        <div>
            <div className='flex flex-col gap-5'>
                <div>
                    ThirdStep
                </div>
                <div className='ml-auto flex gap-5 pt-5'>
                    <Button onClick={()=>props.updateCurrentStep(props.currentStep-1)} variant={'outline'} className='w-fit'>Prev</Button>
                    <Button onClick={()=>props.updateCurrentStep(props.currentStep)} className='w-fit'>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export {ThirdTab}