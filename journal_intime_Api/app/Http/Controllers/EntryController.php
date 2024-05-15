<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entry;

class EntryController extends Controller
{
     // 
    public function getEntryById($id_entry) {
        $entry = Entry::find($id_entry);

        return response()->json($entry);
    }

    //
    public function getEntries($id_user) {
        $entries = Entry::all();
        $filteredEntries = [];

        foreach($entries as $entry) {
            if($entry->id_user == $id_user)
                $filteredEntry[] = $entry;
        }
        return response()->json($filteredEntry);
    }

    // formulaire pour une nouvelle entrée
    public function storeEntry(Request $request) {
        $entry = Entry::create([
            'date' => $request->input('dateSaisie'),
            'titre' => $request->input('titre'),
            'description' => $request->input('description'),
            'id_user' => $request->input('id_user')
        ]);

        return response("Ajout d'entrée réussie!", 201);
    }

    public function updateEntry(Request $request, $id_entry) {
        $entry = Entry::find($id_entry);
        $entry->update($request->all());
        return response()->json($entry); 
    }

    public function deleteEntry($id) {
        $entry = Entry::find($id);
        $entry->delete();

        return response("Suppression réussie", 201);
    }

}
