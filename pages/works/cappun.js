import Layout from "../../components/layouts/article"
import { Container, Badge, Divider, Accordion, AccordionItem, AccordionButton, AccordionIcon, Box, AccordionPanel } from "@chakra-ui/react"
import { Meta, Title } from "../../components/work"
import Date from "../../components/date"
import NextImage from "next/image"
import RepoLink from "../../components/repolink"
import CodeBlock from "../../components/codep"
import ImageCenter from "../../components/imgwrapper"

const LogPost = () => {
    const thumbnail = "http://shylexx.com/images/work/thumbCapPun.jpg"
    return (
        <Layout title="Capital Punishment">
            <Container mt={6} maxW="container.lg">
                <ImageCenter>
                    <NextImage
                        src={thumbnail}
                        alt="Post Thumbnail"
                        className='grid-item-thumbnail'
                        width={700}
                        height={375}
                        quality={100}
                    />
                </ImageCenter>
                <Title>
                    Capital Punishment <Badge colorScheme="pink"><Date dateString="2022-01-19" /></Badge>
                </Title>
                {/* Content div */}
                <div>
                    <Meta><p>JavaScript | Phaser | WebDev</p></Meta><br /><br />
                    <Divider mb={3} />
                    <RepoLink url="https://github.com/Shylexx/capital-punishment" />
                    <p>
                        Capital Punishment is a wave based top-down shooter I created for a Web Based Game Development module in my second year at the University of Brighton.
                        The game can be played in your browser at<a href="http://ad993.brighton.domains/CapitalPunishment/index.html" style={{ color: "#8aadf4" }}> this link. </a>
                        The game uses JavaScript and the Phaser 3 game engine to handle the basics, such as rendering and the physics systems.
                    </p><br />
                    <ImageCenter>
                        <NextImage
                            src="/images/work/cappun.gif"
                            alt="Gameplay GIF"
                            className='grid-item-thumbnail'
                            width={700}
                            height={375}
                            quality={100}
                        />
                    </ImageCenter>
                    <p>
                        Building the game involved implementing the weapons system, using JavaScript's inheritance to create different weapons with shared behaviour as
                        well as the maths required to orient shots in different directions on the 2D plane.</p><br />
                    <p>
                        Additionally, the level is generated using a 'Walker' style grid. This is an approach based on a similar method to the 2D Roguelike 'Nuclear Throne' by Vlambeer.
                        It involves creating fully filled maps where every tile on the grid is representing a wall. Then, in a turn by turn basis, a randomly placed 'walker' carves out
                        the walls by moving in its currently facing direction on each turn. Every turn, the walker has a chance to create a clone on the same tile, facing a random direction,
                        or to be destroyed (if there is another walker able to continue the work), or finally to change its own direction it is tunneling. This continues until a certain percentage
                        of the level has been carved out into walls.
                        This approach of always moving from one tile to another ensures the level always has a continuous path that a player can move through.
                        Changing certain parameters in the generation also changes characteristics of the generated level. Lower chances to turn create more corridor filled levels, while higher chances
                        create wider, more open playing fields.
                    </p><br />
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Bullet Firing Code
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <pre><CodeBlock>{`
    fire(weapon, world){
        this.enableBody(true, weapon.x, weapon.y-5, true, true);
        this.body.setOffset(0, -10);
        this.setBodySize(16,12);
        this.setScale(0.4);
        this.setRotation(
            Phaser.Math.Angle.Between(
                world.player_spr.x,
                world.player_spr.y,
                world.reticle_spr.x,
                world.reticle_spr.y)
        );
        this.direction = Math.atan(
            (world.reticle_spr.x-this.x) / (world.reticle_spr.y-this.y)
        );

        // Calculate X and y velocity of bullet to move 
        // it from weapon to reticle
        if (world.reticle_spr.y >= this.y) {
            this.setVelocity(
                (this.speed+world.player_spr.stats.weaponShotSpeed)*Math.sin(this.direction),
                (this.speed+world.player_spr.stats.weaponShotSpeed)*Math.cos(this.direction));
        }
        else {
            this.setVelocity(
                (-this.speed-world.player_spr.stats.weaponShotSpeed)*Math.sin(this.direction)
                ,(-this.speed-world.player_spr.stats.weaponShotSpeed)*Math.cos(this.direction)
            );
        }

        this.born = 0; // Time since new bullet spawned
    } 
            `}</CodeBlock></pre>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Level Generation
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <pre><CodeBlock>{`
    CreateFloors(percentToFill){
        let iterations = 0;
        do{
            //create floor at position of walkers
            for (let walkerIndex = 0; walkerIndex < this.walkerList.walkers.length; walkerIndex++){
                this.genData.l1walker_ary[this.walkerList.walkers[walkerIndex].getXPos()][this.walkerList.walkers[walkerIndex].getYPos()] = 0;
            }
            //Check if Destroy
            let numberChecks = this.walkerList.walkers.length;
            for (let destroyIndex = 0; destroyIndex < numberChecks; destroyIndex++){
                //If Walker is not only one, random chance to destroy
                if (this.walkerList.walkers.length > 1 && Math.random() < this.chanceWalkerDestroy){
                    this.walkerList.walkers.splice(destroyIndex, 1);
                    break;
                }
            }
            //Random Chance for Walker to Change Direction
            for(let steerIndex = 0; steerIndex < this.walkerList.walkers.length; steerIndex++){
                if(Math.random() < this.chanceWalkerChangeDir){
                    let thisWalker = this.walkerList.walkers[steerIndex];
                    thisWalker.dir = thisWalker.SetRandomDirection();
                    this.walkerList.walkers[steerIndex] = thisWalker;
                }
            }
            //Chance Spawn New Walker
            numberChecks = this.walkerList.walkers.length;
            for(let spawnIndex = 0; spawnIndex < numberChecks; spawnIndex++){
                //Only if more walkers are allowed and based on chance
                if(this.walkerList.walkers.length < this.maxWalkers 
                    && Math.random() < this.chanceWalkerSpawn){
                    //Create and add walker
                    let createWalker = new Walker(
                        this.walkerList.walkers[spawnIndex].xPos,
                        this.walkerList.walkers[spawnIndex].yPos);
                    this.walkerList.walkers.push(createWalker);
                }
            }

            //Update Walker Positions
            for(let moveIndex = 0; moveIndex < this.walkerList.walkers.length; moveIndex++){
                let thisWalker = this.walkerList.walkers[moveIndex];
                
                if(thisWalker.dir == "left"){
                    thisWalker.xPos = thisWalker.xPos - 1;
                  
                } else if(thisWalker.dir == "up"){
                    thisWalker.yPos = thisWalker.yPos - 1;
               
                }else if(thisWalker.dir == "right"){
                    thisWalker.xPos = thisWalker.xPos + 1;
                
                }else if(thisWalker.dir == "down"){
                    thisWalker.yPos = thisWalker.yPos + 1;
              
                }else {
                    console.log("Invalid Direction");
                }
                this.walkerList.walkers[moveIndex] = thisWalker;
    
            }

            //Clamp Walker Position to Prevent Exiting the World border

            for(let clampIndex = 0; clampIndex < this.walkerList.walkers.length; clampIndex++){
                let thisWalker = this.walkerList.walkers[clampIndex];
                thisWalker.xPos = Math.min(Math.max(thisWalker.xPos, 1), this.roomWidth-2);
                thisWalker.yPos =  Math.min(Math.max(thisWalker.yPos, 1), this.roomHeight-2);
                this.walkerList.walkers[clampIndex] = thisWalker;
            }

            //Check to Exit loop 
 
            if(this.NumberOfFloors() / (this.roomHeight * this.roomWidth) > percentToFill){
                break;
            }
            iterations++;


          }while(iterations < 100000);    

    }
            `}</CodeBlock></pre>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Container>
        </Layout>
    )
}

export default LogPost;
