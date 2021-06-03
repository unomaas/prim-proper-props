function PartyLeader({leader}) {
  return (
    <>
      <h2>Party Leader</h2>
      {leader && <h3>{leader.name}</h3>}
    </>
  ) // End return
} // End PartyLeader

export default PartyLeader;