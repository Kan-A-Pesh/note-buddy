import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
    name: IconName;
}

export type IconName = keyof typeof dynamicIconImports;

export default function Icon({ name, ...props }: IconProps) {
    const LucideIcon = dynamic(dynamicIconImports[name]);

    return <LucideIcon {...props} />;
}
