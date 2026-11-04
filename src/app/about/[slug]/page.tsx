import { createSectionRoute } from '@/components/sections/section-route';

const route = createSectionRoute('about');
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
