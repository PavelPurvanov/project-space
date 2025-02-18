/**
 * External dependencies.
 */
import { Link } from '@inertiajs/react';
import { BadgePlus, PencilRuler } from 'lucide-react';

/**
 * Internal dependencies.
 */
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
                            <button type="button">
                                <PencilRuler color="#0c3d51" />
                            </button>
                        </VStack>
                    </div>
                ))}

                <button type="button" className="projects-create">
                    <BadgePlus color="#ffffff" />
                </button>
            </div>
        </Layout>
    );
};

export default Projects;
