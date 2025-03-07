/**
 * @component
 * Shows comprehensive information about the selected puppy, if there is one.
 * Also provides a button for users to remove the selected puppy from the roster.
 */
export default function PuppyDetails({ selectedPuppyId, setSelectedPuppyId }) {
  // TODO: Grab data from the `getPuppy` query

  // TODO: Use the `deletePuppy` mutation to remove a puppy when the button is clicked

  function removePuppy(id) {
    setSelectedPuppyId();
  }

  // There are 3 possibilities:
  let $details;
  // 1. A puppy has not yet been selected.
  if (!selectedPuppyId) {
    $details = <p>Please select a puppy to see more details.</p>;
  }
  //  2. A puppy has been selected, but results have not yet returned from the API.
  else if (isLoading) {
    $details = <p>Loading puppy information...</p>;
  }
  // 3. Information about the selected puppy has returned from the API.
  else {
    $details = (
      <>
        <h3>
          {puppy.name} #{puppy.id}
        </h3>
        <p>{puppy.breed}</p>
        <p>Team {puppy.team?.name ?? "Unassigned"}</p>
        <button onClick={() => removePuppy(puppy.id)}>
          Remove from roster
        </button>
        <figure>
          <img src={puppy.imageUrl} alt={puppy.name} />
        </figure>
      </>
    );
  }

  return (
    <aside>
      <h2>Selected Puppy</h2>
      {$details}
    </aside>
  );
}
