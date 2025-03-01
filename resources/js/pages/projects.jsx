/**
 * External dependencies.
 */
import { Link } from '@inertiajs/react';
import { BadgePlus, PencilRuler } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import { VStack } from '@/components/stack/stack';

const Projects = ({ projects }) => {
    return (
        <Layout>
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.slug} className="projects__item">
                        <VStack>
                            <Link href={`/${project.slug}`}>
                                {project.name}
                            </Link>
                        </VStack>
                        <VStack>
                            <Button type="button" className="projects-edit">
                                <PencilRuler color="#0c3d51" />
                            </Button>
                        </VStack>
                    </div>
                ))}

                <Button color="blue" modifier="medium">
                    <BadgePlus color="#ffffff" />
                </Button>
            </div>
        </Layout>
    );
};

export default Projects;
