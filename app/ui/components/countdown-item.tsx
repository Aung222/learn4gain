// CountdownItem.tsx
import { Chip } from '@nextui-org/react';
import React from 'react';

interface CountdownItemProps {
  value: number;
  label: string;
}

export default function CountdownItem({ value, label }:{value: number, label: string}) {
    return(
        <div className="items-center">
          <Chip radius="sm" size="lg">{value}</Chip>
          <p className="text-center">{label}</p>
        </div>
    );
} 

