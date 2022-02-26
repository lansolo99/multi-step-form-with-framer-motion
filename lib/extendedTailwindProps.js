//@eslint-ignore
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

const extendedTailwindProps = {
    bpcyan: fullConfig.theme.colors.bpcyan['500'],
    bpPrimary500: fullConfig.theme.colors['bp-primary']['500'],
    bpGrey400: fullConfig.theme.colors['bpgrey']['400']
};

export default extendedTailwindProps;
