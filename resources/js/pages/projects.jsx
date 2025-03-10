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
                            <Link href={`/projects/${project.slug}`}>
                                {project.name}
                            </Link>
                        </VStack>
                        <VStack>
                            <Link
                                href={`/projects/${project.slug}/edit`}
                                className="projects-edit"
                            >
                                <PencilRuler color="#0c3d51" />
                            </Link>
                        </VStack>
                    </div>
                ))}

                <Link href="/projects/create" className="button button--blue">
                    <BadgePlus color="#ffffff" />
                </Link>
            </div>
        </Layout>
    );
};

export default Projects;
