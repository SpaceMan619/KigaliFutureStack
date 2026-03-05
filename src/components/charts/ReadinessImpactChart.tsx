import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  Cell
} from 'recharts';
import { GlassPanel } from '@/components/glass/GlassPanel';

interface OpportunityData {
  id: string;
  name: string;
  nameRw: string;
  sector: string;
  pillar: string;
  readiness: string;
  impact: string;
  horizon: string;
  capitalIntensity: string;
  marketAdoption: string;
  description: string;
  descriptionRw: string;
  businessModels: string[];
  riskLevel: string;
  returnPotential: string;
  investmentRange: string;
  keyMetrics: {
    tam: string;
    growthRate: string;
    jobsPotential: string;
  };
  nst2Alignment: string[];
  skillsNeeded: string[];
}

interface ReadinessImpactChartProps {
  opportunities: OpportunityData[];
  title?: string;
  className?: string;
  onSelect?: (opportunity: OpportunityData) => void;
}

const readinessMap: Record<string, number> = { low: 1, medium: 2, high: 3 };
const impactMap: Record<string, number> = { low: 1, medium: 2, high: 3 };

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-lg p-3 shadow-xl max-w-xs">
        <p className="text-white font-medium mb-1">{data.name}</p>
        <p className="text-sm text-white/60 mb-2">{data.sector}</p>
        <div className="space-y-1 text-sm">
          <p className="text-emerald-400">Readiness: {data.readiness}</p>
          <p className="text-blue-400">Impact: {data.impact}</p>
          <p className="text-purple-400">Investment: {data.investmentRange}</p>
        </div>
      </div>
    );
  }
  return null;
};

export function ReadinessImpactChart({ 
  opportunities, 
  title, 
  className,
  onSelect 
}: ReadinessImpactChartProps) {
  const data = opportunities.map(opp => ({
    ...opp,
    x: readinessMap[opp.readiness],
    y: impactMap[opp.impact],
    z: opp.capitalIntensity === 'low' ? 100 : opp.capitalIntensity === 'medium' ? 200 : 300
  }));

  const colors: Record<string, string> = {
    agriculture: '#10B981',
    energy: '#F59E0B',
    financial: '#3B82F6',
    education: '#8B5CF6',
    health: '#EF4444',
    trade: '#EC4899',
    tourism: '#06B6D4',
    environment: '#22C55E',
    industry: '#6366F1',
    construction: '#78716C',
    creative: '#F97316',
    sports: '#84CC16'
  };

  return (
    <GlassPanel className={className} variant="elevated">
      {title && (
        <div className="p-6 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/60 mt-1">
            Bubble size = Capital Intensity | X = Readiness | Y = Impact
          </p>
        </div>
      )}
      <div className="p-6">
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Readiness"
              domain={[0.5, 3.5]}
              ticks={[1, 2, 3]}
              tickFormatter={(v) => ['', 'Low', 'Medium', 'High'][v]}
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
              label={{ value: 'Market Readiness', position: 'bottom', fill: 'rgba(255,255,255,0.5)', offset: 0 }}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Impact"
              domain={[0.5, 3.5]}
              ticks={[1, 2, 3]}
              tickFormatter={(v) => ['', 'Low', 'Medium', 'High'][v]}
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
              label={{ value: 'NST2 Impact', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.5)' }}
            />
            <ZAxis type="number" dataKey="z" range={[100, 400]} />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={data} onClick={(data) => onSelect?.(data as OpportunityData)}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colors[entry.sector] || '#10B981'}
                  fillOpacity={0.8}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={1}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </GlassPanel>
  );
}
