/* eslint-disable no-unused-vars */

import { form } from '@/datas/form';

import { IForm } from '@/interfaces/form';

import { Card, SectionContainer } from '@/components/ui';
import { Wizard } from '@/components/wizard';

interface Props {
    formDatas: IForm;
}

const Home = ({ formDatas }: Props) => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-bpgrey-500">
            <SectionContainer classNames="relative w-full">
                <div className="max-w-[1000px] mx-auto">
                    <div>
                        <Card>
                            <Wizard formDatas={formDatas} />
                        </Card>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            formDatas: form
        }
    };
};

export default Home;
