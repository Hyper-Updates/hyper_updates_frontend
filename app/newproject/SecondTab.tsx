import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React from 'react'

type SecondTabProps = {
    currentStep: number;
    updateCurrentStep: (newStep: number) => void;
};

const SecondTab: React.FC<SecondTabProps> = (props) => {
    return (
        <div>
            <div className='flex flex-col gap-5'>
                <div>
                    SecondStep
                </div>
                <div className='ml-auto flex gap-5 pt-5'>
                    <Button onClick={()=>props.updateCurrentStep(props.currentStep-1)} variant={'outline'} className='w-fit'>Prev</Button>
                    <Button onClick={()=>props.updateCurrentStep(props.currentStep+1)} className='w-fit'>Next</Button>
                </div>
            </div>
        </div>
    )
}

export {SecondTab}