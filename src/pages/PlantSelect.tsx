import { forModalPresentationIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { EnviromentButton } from "../components/EnviromentButton";
import { Header } from "../components/Header";
import { Load } from "../components/loading";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentProps {
  key: string;
  title: string;
}
interface PlantsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState("all");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);
  function handleEnviromentSelected(enviroments: string) {
    setEnviromentSelected(enviroments);

    if (enviroments === "all") return setFilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(enviroments)
    );

    setFilteredPlants(filtered);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?sort=name&_order=asc&_page${page}&_limit=8`
    );
    if (!data) return setLoading(true);
    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );
      setEnviroments([
        {
          key: "all",
          title: "todos",
        },
        ...data,
      ]);
    }
    fetchEnviroment();
  }, []);

  useEffect(() => {}, []);
  if (loading) return <Load />;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Text style={styles.title}>Em qual hambiente</Text>
        <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
        <View>
          <FlatList
            data={enviroments}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <EnviromentButton
                title={item.title}
                active={item.key === enviromentSelected}
                onPress={() => handleEnviromentSelected(item.key)}
              />
            )}
            contentContainerStyle={styles.enviromentList}
          />
        </View>
        <View style={styles.plants}>
          <FlatList
            data={filteredPlants}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => <PlantCardPrimary data={item} />}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) =>
              handleFetchMore(distanceFromEnd)
            }
            ListEmptyComponent={
              loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    width: "100%",
    marginHorizontal: 17,
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 23,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 17,
    justifyContent: "center",
  },
});
