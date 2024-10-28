import ClaptonData from './clapton';
import CoventGardenData from './covent-garden';
import EmpireCasinoData from './empire-casino';

const data = [
    { barId: 'clapton', data: ClaptonData },
    { barId: 'covent-garden', data: CoventGardenData },
    { barId: 'empire-casino', data: EmpireCasinoData },
];

export function getBarData(barId: string): BarData | null {
    const result = data.find(bar => bar.barId === barId);
    return result?.data;
}