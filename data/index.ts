import type { BarData } from '../src/types';
import ClaptonData from './clapton';
import CoventGardenData from './covent-garden';
import LeicesterSquareData from './leicester-square';

const data = [
    { id: 'covent-garden', data: CoventGardenData },
    { id: 'clapton', data: ClaptonData },
    { id: 'leicester-square', data: LeicesterSquareData },
];

export function getBarData(id: string): BarData | null {
    const result = data.find(bar => bar.id === id);
    return { id: result.id, ...result?.data };
}

export function getBarIds(): string[] {
    return data.map(bar => bar.id);
}

export function getAllBars(): BarData[] {
    return data.map(bar => ({ id: bar.id, ...bar.data }));
}