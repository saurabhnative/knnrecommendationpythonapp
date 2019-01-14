#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jan  8 22:20:33 2019
@author: saurabh2
"""

#API request to get data
#You can find details about the code in jupyter notebook folder of the repo
def nearest_neighbours(show_id):
    import requests as req
    url = 'https://api.tvmaze.com/schedule?country=US'
    resp = req.get(url)
    response = resp.text

    import json
    data = json.loads(response)

    from pandas.io.json import json_normalize
    df = json_normalize(data)
    df_first = df.copy()
    df_first['id']
    df_relevant = df[['name','id','show.name','show.genres','show.rating.average','show.type']]
    df_relevant["full_name"] = df_relevant["show.name"].map(str) +"-"+ df_relevant["name"]
    df_relevant = df_relevant.drop(['name','show.name'], axis=1)
    renamed_columns_dictionary = {'show.genres': 'genres',
                                  'show.language': 'language',
                                  'show.rating.average':'rating',
                                  'show.type':'type'
                                 }
    df_relevant.rename(columns=renamed_columns_dictionary, inplace=True)
    df_relevant = df_relevant.drop(df_relevant[df_relevant['genres'].str.len() == 0].index)
    df = df_relevant.copy()
    df["rating"].fillna(df["rating"].median(), inplace = True)
    df['genres'] = df['genres'].apply(lambda x: ",".join(x))
    import pandas as pd
    tv_show_features = pd.concat([df["genres"].str.get_dummies(sep=","),
                                pd.get_dummies(df[["type"]]),
                                df[["rating"]]],axis=1)
    from sklearn.preprocessing import MinMaxScaler
    min_max_scaler = MinMaxScaler()
    tv_show_features = min_max_scaler.fit_transform(tv_show_features)
    from sklearn.neighbors import NearestNeighbors
    nbrs = NearestNeighbors(n_neighbors=6, algorithm='ball_tree').fit(tv_show_features)
    distances, indices = nbrs.kneighbors(tv_show_features)
    indices

    def get_index_from_name(name):
        return df[df["full_name"]==name].index.tolist()[0]

    def get_index_from_id(id):
        return df_first[df_first["id"]==id].index.tolist()[0]

    all_show_names = list(df.full_name.values)

    def get_id_from_partial_name(partial):
        for name in all_show_names:
            if partial in name:
                print(name,all_show_names.index(name))

    def print_similar_tvshows(id=None):
        related_showids=[]
        if id:
            for iditer in indices[get_index_from_id(id)][1:]:
                related_showids.append(df_first.iloc[iditer]["id"])
            return related_showids

    return print_similar_tvshows(show_id)
