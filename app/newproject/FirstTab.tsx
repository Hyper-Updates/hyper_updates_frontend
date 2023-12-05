import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React from 'react'

type FirstTabProps = {
    currentStep: number;
    updateCurrentStep: (newStep: number) => void;
};

const FirstTab: React.FC<FirstTabProps> = (props) => {
    return (
        <div>
            <div className='flex flex-col gap-5'>
                <p className='text-xl font-semibold'>
                    Create A New Project Repository
                </p>
                <div className='flex flex-col gap-5 text-sm'>
                    <label className='flex flex-col gap-1'>
                        Organization Name *
                        <Input type="text" required className='bg-neutral-100 text-base' />
                    </label>
                    <label className='flex flex-col gap-1'>
                        Project Name *
                        <Input type="text" required className='bg-neutral-100 text-base' />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Description <span className='text-neutral-400'>(optional)</span></p>
                        <textarea required className='bg-neutral-100 text-base' />
                    </label>

                </div>
                <div className='ml-auto flex gap-5 pt-5'>
                    <Button onClick={()=>props.updateCurrentStep(props.currentStep+1)} className='w-fit'>Next</Button>
                </div>
            </div>
        </div>
    )
}

export {FirstTab}