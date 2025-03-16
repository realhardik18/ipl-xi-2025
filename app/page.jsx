'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const [expandedTeams, setExpandedTeams] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getData');
        const result = await response.json();
        setData(result.record);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleTeam = (teamKey) => {
    setExpandedTeams(prev => ({
      ...prev,
      [teamKey]: !prev[teamKey]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen p-5 bg-black text-white">
        <h1 className="text-4xl font-bold mb-8">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5 bg-black">
      <h1 className="text-4xl text-white font-bold mb-8">IPL Squads 2025</h1>
      
      {error && (
        <div className="text-white mb-4">Error: {error}</div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {data && Object.entries(data.teams).map(([teamKey, teamData]) => (
          <div key={teamKey} className="border border-white">
            <button 
              onClick={() => toggleTeam(teamKey)}
              className="w-full p-4 text-left bg-black text-white hover:bg-gray-900 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-bold">{teamData.team_name}</h2>
              <span className="text-2xl">{expandedTeams[teamKey] ? '−' : '+'}</span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedTeams[teamKey] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {teamData.players.map((player, index) => (
                  <div key={index} className="border border-white p-4">
                    <h3 className="text-lg text-white font-semibold">{player.player_name}</h3>
                    <span className="text-sm text-gray-400">{player.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
