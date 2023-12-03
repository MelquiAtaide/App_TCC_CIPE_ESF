import React, { useState } from 'react';
import { TouchableOpacity, StatusBar, ScrollView } from 'react-native';
// estilos
import { Container, Titulo, TituloContainer, TermoContainer, Termo, Texto, Acao, AlvoContainer, Alvo, Favorito, FavoritoContainer } from './style';
// icones
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Componentes
import { BotaoPesquisa } from '../../BotaoPesquisa';

export interface TermosProps {
    // titulo: string;
}

export function Termos (props: TermosProps) {
    return(
        <Container>
            <TituloContainer>
                <Titulo>Termos</Titulo>
            </TituloContainer>
            <ScrollView>
                <TermoContainer>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                    <Termo>
                        <Acao><Texto>Abuso de</Texto></Acao>
                        <AlvoContainer>
                            <Alvo><Texto>Álcool (ou Alcoolismo)</Texto></Alvo>
                            <Alvo><Texto>Drogas</Texto></Alvo>
                            <Alvo><Texto>Tabaco (ou de Fumo)</Texto></Alvo>
                        </AlvoContainer>
                        <FavoritoContainer>
                            <Favorito>
                                <MaterialIcons name="favorite-border" size={30} color="#37A69C"/>
                            </Favorito>
                        </FavoritoContainer>
                    </Termo>
                </TermoContainer>
            </ScrollView>
        </Container>
    )
}