"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdminDashboard;
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
function AdminDashboard() {
    return (<div className="flex min-h-screen bg-neutral-950 text-neutral-50">
      
      <aside className="w-72 border-r border-neutral-900 hidden lg:flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white">T</div>
          <span className="text-xl font-bold tracking-tight">TransitIQ</span>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { icon: lucide_react_1.LayoutDashboard, label: 'Overview', active: true },
            { icon: lucide_react_1.Bus, label: 'Vehicles' },
            { icon: lucide_react_1.Users, label: 'Drivers' },
            { icon: lucide_react_1.Map, label: 'Routes' },
            { icon: lucide_react_1.Settings, label: 'Settings' },
        ].map((item) => (<div key={item.label} className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-colors cursor-pointer ${item.active
                ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20'
                : 'text-neutral-500 hover:bg-neutral-900 hover:text-neutral-300'}`}>
              <item.icon className="w-5 h-5"/>
              {item.label}
            </div>))}
        </nav>

        <div className="pt-6 border-t border-neutral-900 mt-auto">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-neutral-500 hover:bg-neutral-900 hover:text-red-400 transition-colors cursor-pointer group">
            <lucide_react_1.LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform"/>
            Sign Out
          </div>
        </div>
      </aside>

      
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Admin Dashboard</h2>
              <p className="text-neutral-500">Welcome back, Managing the operations for <span className="text-indigo-400 font-semibold">Test Firma 123</span></p>
            </div>
            <button_1.Button className="bg-white text-black hover:bg-neutral-200 rounded-2xl h-11 px-6 font-semibold">
              Create New Trip
            </button_1.Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
            { label: 'Active Trips', value: '12', trend: '+20%', color: 'border-indigo-500/20' },
            { label: 'Total Revenue', value: '$45,231', trend: '+12%', color: 'border-emerald-500/20' },
            { label: 'Avg Occupancy', value: '84%', trend: '+5%', color: 'border-amber-500/20' },
        ].map((stat) => (<div key={stat.label} className={`p-8 rounded-[32px] bg-neutral-900/40 border ${stat.color} backdrop-blur-sm`}>
                <p className="text-sm font-medium text-neutral-500 mb-4">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-4xl font-bold tracking-tight">{stat.value}</h3>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">{stat.trend}</span>
                </div>
              </div>))}
          </div>

          <div className="rounded-[40px] bg-neutral-900/40 border border-neutral-900 overflow-hidden">
            <div className="p-8 border-b border-neutral-900 flex items-center justify-between">
              <h3 className="font-bold text-xl">Recent Activity</h3>
              <button_1.Button variant="ghost" className="text-neutral-500 text-xs rounded-xl h-8">View All <lucide_react_1.ChevronRight className="ml-1 w-3 h-3"/></button_1.Button>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (<div key={i} className="flex items-center gap-4 p-4 rounded-3xl hover:bg-neutral-900/60 transition-colors group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                      <lucide_react_1.Bus className="w-6 h-6 text-neutral-400"/>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-200">Trip #TRXP-{1000 + i} Assigned</p>
                      <p className="text-xs text-neutral-500">2 minutes ago • Vehicle VH-00{i}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">Processing</span>
                    </div>
                  </div>))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>);
}
//# sourceMappingURL=page.js.map